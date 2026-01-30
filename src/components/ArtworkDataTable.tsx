import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { fetchArtworks } from '../services/artworkService';
import type { Artwork, ApiResponse } from '../types';
import { CustomRowSelection } from './CustomRowSelection';
import './ArtworkDataTable.css';

/**
 * ArtworkDataTable Component
 * 
 * Main component displaying artworks with:
 * - Server-side pagination
 * - Persistent row selection across pages
 * - Custom selection overlay
 * 
 * Selection uses ID-based tracking (no data prefetching)
 */
export const ArtworkDataTable: React.FC = () => {
  // ========== STATE: Artwork Data ==========
  // Current page's artwork items
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  // Loading state for spinner display
  const [loading, setLoading] = useState(false);
  // Current page (1-based)
  const [currentPage, setCurrentPage] = useState(1);
  // Total pages available
  const [totalPages, setTotalPages] = useState(0);

  // ========== STATE: Selection Tracking ==========
  // IDs of rows user selected (persists across pages)
  const [selectedRowIds, setSelectedRowIds] = useState<Set<number>>(new Set());
  // IDs of rows user explicitly deselected (persists across pages)
  const [deselectedRowIds, setDeselectedRowIds] = useState<Set<number>>(new Set());

  // ========== REFS ==========
  // Reference to overlay panel for custom selection
  const overlayPanelRef = useRef<OverlayPanel>(null);
  // Reference to toast notification system
  const toastRef = useRef<Toast>(null);

  // ========== CONSTANTS ==========
  const rowsPerPage = 12;

  /**
   * Returns total number of selected rows across all pages
   * (IDs present in selectedRowIds but not in deselectedRowIds)
   */
  const getTotalSelectedCount = () => {
    let count = 0;
    selectedRowIds.forEach((id) => {
      if (!deselectedRowIds.has(id)) count++;
    });
    return count;
  };

  // ========== EFFECTS ==========
  /**
   * Effect: Fetch artworks when page changes
   * 
   * Dependencies: [currentPage]
   * This ensures fresh data when user navigates
   */
  useEffect(() => {
    loadArtworks(currentPage);
  }, [currentPage]);

  // ========== DATA LOADING FUNCTIONS ==========
  /**
   * Loads artwork data from API for given page
   * 
   * Steps:
   * 1. Show loading spinner
   * 2. Fetch from API
   * 3. Update state
   * 4. Handle errors with toast
   * 5. Hide spinner
   */
  const loadArtworks = async (page: number) => {
    setLoading(true);
    try {
      const data: ApiResponse = await fetchArtworks(page);
      setArtworks(data.data);
      setTotalPages(data.pagination.total_pages);
    } catch (error) {
      console.error('Failed to load artworks:', error);
      toastRef.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load artworks',
      });
    } finally {
      setLoading(false);
    }
  };

  // ========== SELECTION HANDLING FUNCTIONS ==========
  /**
   * Handles DataTable row selection/deselection
   * 
   * Updates selectedRowIds and deselectedRowIds sets
   * to maintain persistent selection state
   */
  const handleRowSelectionChange = (e: any) => {
    // Create new copies of the sets to avoid mutation
    const newSelectedIds = new Set(selectedRowIds);
    const newDeselectedIds = new Set(deselectedRowIds);

    // Step 1: Mark newly selected rows
    e.value.forEach((artwork: Artwork) => {
      newSelectedIds.add(artwork.id);        // Add to selected
      newDeselectedIds.delete(artwork.id);   // Remove from deselected
    });

    // Step 2: Mark rows that were deselected
    artworks.forEach((artwork) => {
      const wasSelected = e.value.find((a: Artwork) => a.id === artwork.id);
      
      // If row is NOT in the new selection
      if (!wasSelected) {
        // And it was previously selected (in selectedRowIds)
        if (selectedRowIds.has(artwork.id)) {
          // Mark it as explicitly deselected
          newDeselectedIds.add(artwork.id);
          newSelectedIds.delete(artwork.id);
        }
      }
    });

    // Update both sets to trigger re-render
    setSelectedRowIds(newSelectedIds);
    setDeselectedRowIds(newDeselectedIds);
  };

  /**
   * Gets the currently selected rows for the page
   * 
   * Selection logic:
   * A row is selected if:
   * - ID is in selectedRowIds AND
   * - ID is NOT in deselectedRowIds
   * 
   * This allows persistent selection across pages
   * without storing full row objects
   */
  const getSelectedRows = (): Artwork[] => {
    return artworks.filter((artwork) => {
      const isInSelectedIds = selectedRowIds.has(artwork.id);
      const isInDeselectedIds = deselectedRowIds.has(artwork.id);
      // Row is selected if explicitly selected AND not explicitly deselected
      return isInSelectedIds && !isInDeselectedIds;
    });
  };

  /**
   * Selects all rows on the current page
   * 
   * Only affects current page data (doesn't prefetch)
   * Updates both sets to track the selection
   */
  const handleSelectAll = () => {
    const newSelectedIds = new Set(selectedRowIds);
    const newDeselectedIds = new Set(deselectedRowIds);

    // Add all current page artworks to selected
    artworks.forEach((artwork) => {
      newSelectedIds.add(artwork.id);
      newDeselectedIds.delete(artwork.id);
    });

    setSelectedRowIds(newSelectedIds);
    setDeselectedRowIds(newDeselectedIds);
  };

  /**
   * Deselects all rows on the current page
   * 
   * Only affects current page data (doesn't prefetch)
   * Updates both sets to track the deselection
   */
  const handleDeselectAll = () => {
    const newSelectedIds = new Set(selectedRowIds);
    const newDeselectedIds = new Set(deselectedRowIds);

    // Mark all current page artworks as explicitly deselected
    artworks.forEach((artwork) => {
      newSelectedIds.delete(artwork.id);
      newDeselectedIds.add(artwork.id);
    });

    setSelectedRowIds(newSelectedIds);
    setDeselectedRowIds(newDeselectedIds);
  };

  /**
   * Handles custom row selection from overlay panel
   * 
   * Selects up to 'count' rows on current page
   * Does NOT fetch other pages or store other page data
   * Only operates on current page's artworks
   * 
   * @param count - Number of rows to select (1 to maxAvailable)
   */
  const handleCustomRowSelection = (count: number) => {
    const newSelectedIds = new Set(selectedRowIds);
    const newDeselectedIds = new Set(deselectedRowIds);

    // Select first 'count' rows that aren't deselected
    let selected = 0;
    for (const artwork of artworks) {
      // Stop if we've selected enough rows
      if (selected >= count) break;

      // Skip if already marked as deselected
      if (!newDeselectedIds.has(artwork.id)) {
        newSelectedIds.add(artwork.id);
        newDeselectedIds.delete(artwork.id);
        selected++;
      }
    }

    setSelectedRowIds(newSelectedIds);
    setDeselectedRowIds(newDeselectedIds);

    // Show user feedback
    toastRef.current?.show({
      severity: 'info',
      summary: 'Selection Updated',
      detail: `Selected ${selected} row(s)`,
    });
  };

  /**
   * Counts how many rows are selected on current page
   * 
   * Used for display in toolbar
   */
  const getSelectedCountOnPage = () => {
    return artworks.filter((artwork) => {
      return selectedRowIds.has(artwork.id) && !deselectedRowIds.has(artwork.id);
    }).length;
  };

  /**
   * Handles pagination event from DataTable
   * 
   * Triggered when user clicks next/previous page
   * Updates currentPage which triggers useEffect to load new data
   */
  const onPageChange = (event: any) => {
    setCurrentPage(event.page + 1);
  };

  // ========== TOOLBAR CONTENT FUNCTIONS ==========
  /**
   * Renders left side of toolbar (selection counter)
   */
  const toolbarLeftContent = () => (
    <div className="toolbar-section">
      <div className="selection-info">
        <div className="selection-onpage">Selected on this page: <strong>{getSelectedCountOnPage()}</strong> / {artworks.length}</div>
        <div className="selection-total">Total selected: <span className="selection-badge">{getTotalSelectedCount()}</span></div>
      </div>
    </div>
  );

  /**
   * Renders right side of toolbar (action buttons)
   */
  const toolbarRightContent = () => (
    <div className="toolbar-section">
      <Button
        label="Select All"
        icon="pi pi-check-square"
        onClick={handleSelectAll}
        className="p-button-info"
        size="small"
      />
      <Button
        label="Deselect All"
        icon="pi pi-square"
        onClick={handleDeselectAll}
        className="p-button-warning"
        size="small"
      />
      <Button
        label="Custom Select"
        icon="pi pi-ellipsis-h"
        onClick={(e) => overlayPanelRef.current?.toggle(e)}
        className="p-button-secondary"
        size="small"
      />
    </div>
  );

  // ========== RENDER ==========
  /**
   * Main component JSX
   * 
   * Renders:
   * 1. Toast notification system
   * 2. Header with title
   * 3. Toolbar with selection controls
   * 4. Custom selection overlay
   * 5. Loading spinner or DataTable
   */
  return (
    <div className="artwork-datatable">
      <Toast ref={toastRef} />
      
      <div className="header">
        <h1>Artwork Gallery</h1>
        <p>Browse artworks from the Art Institute of Chicago</p>
      </div>

      <Toolbar
        left={toolbarLeftContent()}
        right={toolbarRightContent()}
        className="selection-toolbar"
      />

      {/* Custom Row Selection Overlay Panel */}
      <CustomRowSelection
        opRef={overlayPanelRef}
        onSelectRows={handleCustomRowSelection}
        maxAvailable={artworks.length}
      />

      {/* Show spinner while loading, DataTable when ready */}
      {loading ? (
        <div className="loading-container">
          <ProgressSpinner />
        </div>
      ) : (
        <DataTable
          value={artworks}
          selection={getSelectedRows()}               // Selected rows for current page
          onSelectionChange={(e) => handleRowSelectionChange(e)}
          selectionMode="checkbox"                   // Show checkboxes for selection
          dataKey="id"                               // Use id as unique key
          paginator                                  // Enable pagination controls
          rows={rowsPerPage}                         // 12 rows per page
          first={(currentPage - 1) * rowsPerPage}    // Calculate first row index
          onPage={onPageChange}                      // Handle page changes
          totalRecords={totalPages * rowsPerPage}    // Total records for pagination
          className="artwork-table"
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} artworks (Page {currentPage} of {totalPages})"
          globalFilterFields={['title', 'artist_display']}
        >
          {/* Selection Checkbox Column */}
          <Column selectionMode="multiple" headerStyle={{ width: '50px' }} />

          {/* Artwork Title */}
          <Column
            field="title"
            header="Title"
            sortable
            style={{ minWidth: '200px' }}
            className="title-column"
          />

          {/* Place of Origin */}
          <Column
            field="place_of_origin"
            header="Place of Origin"
            sortable
            style={{ minWidth: '150px' }}
          />

          {/* Artist Name */}
          <Column
            field="artist_display"
            header="Artist"
            sortable
            style={{ minWidth: '150px' }}
            className="artist-column"
          />

          {/* Inscriptions */}
          <Column
            field="inscriptions"
            header="Inscriptions"
            style={{ minWidth: '150px' }}
            className="inscriptions-column"
          />

          {/* Start Date */}
          <Column
            field="date_start"
            header="Date Start"
            sortable
            style={{ minWidth: '100px' }}
          />

          {/* End Date */}
          <Column
            field="date_end"
            header="Date End"
            sortable
            style={{ minWidth: '100px' }}
          />
        </DataTable>
      )}
    </div>
  );
};
