import React, { useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import './CustomRowSelection.css';

/**
 * Props for the CustomRowSelection component
 */
interface CustomRowSelectionProps {
  opRef: React.Ref<OverlayPanel>;        // Reference to the overlay panel
  onSelectRows: (count: number) => void; // Callback when user confirms selection
  maxAvailable: number;                  // Maximum rows available on current page
}

/**
 * CustomRowSelection Component
 * 
 * Displays an overlay panel that allows users to select a custom number of rows
 * from the current page. Features:
 * - Number input field with validation
 * - Help text showing max available rows
 * - Select button that calls the parent callback
 * 
 * @example
 * <CustomRowSelection
 *   opRef={panelRef}
 *   onSelectRows={handleSelect}
 *   maxAvailable={12}
 * />
 */
export const CustomRowSelection: React.FC<CustomRowSelectionProps> = ({
  opRef,
  onSelectRows,
  maxAvailable,
}) => {
  // State to track the number of rows user wants to select
  const [selectCount, setSelectCount] = useState<number | null>(null);

  /**
   * Handles the Select button click
   * 
   * This function:
   * 1. Validates that a valid number was entered
   * 2. Calls the parent component callback with the count
   * 3. Resets the input field
   * 
   * If validation fails, shows an alert to the user
   */
  const handleSelectClick = () => {
    // Validate: ensure a valid number was entered
    if (selectCount && selectCount > 0) {
      // Call the parent callback with the selected count
      onSelectRows(selectCount);
      // Reset the input field for next use
      setSelectCount(null);
    } else {
      // Show error if invalid input
      alert('Please enter a valid number greater than 0');
    }
  };

  return (
    <OverlayPanel ref={opRef} showCloseIcon>
      <div className="custom-row-selection">
        <h3>Select Rows</h3>

        {/* Input section */}
        <div className="selection-input-group">
          <label htmlFor="select-count">Number of rows:</label>

          {/* Number input with validation */}
          <InputNumber
            id="select-count"
            value={selectCount}
            onValueChange={(e) => setSelectCount(e.value || null)}
            min={1}                    // Minimum value allowed
            max={maxAvailable}         // Maximum based on current page rows
            placeholder="Enter number"
            inputClassName="selection-input"
          />

          {/* Help text showing the limit */}
          <small>Max: {maxAvailable} rows on this page</small>
        </div>

        {/* Action buttons */}
        <div className="selection-buttons">
          <Button
            label="Select"
            icon="pi pi-check"
            onClick={handleSelectClick}
            className="p-button-success"
            disabled={!selectCount || selectCount <= 0}  // Disable if no valid input
          />
        </div>
      </div>
    </OverlayPanel>
  );
};
