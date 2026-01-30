/**
 * Artwork Data Type
 * 
 * Represents a single artwork object from the Art Institute of Chicago API
 * This interface defines the structure of data we receive and display in our table
 */
export interface Artwork {
  id: number;                    // Unique identifier for the artwork
  title: string;                 // Name/title of the artwork
  place_of_origin: string;       // Geographic location where artwork originated
  artist_display: string;        // Name(s) of the artist(s) who created the work
  inscriptions: string;          // Any text or markings inscribed on the artwork
  date_start: number;            // Starting year of artwork creation
  date_end: number;              // Ending year of artwork creation
}

/**
 * API Response Type
 * 
 * Represents the complete response structure from the Art Institute API
 * Includes both the artwork data array and pagination information
 */
export interface ApiResponse {
  data: Artwork[];               // Array of artwork objects for current page
  pagination: {
    total: number;               // Total number of artworks available
    limit: number;               // Number of items per page (usually 12)
    offset: number;              // Position offset from the beginning
    total_pages: number;         // Total number of pages available
    current_page: number;        // Current page number
  };
}
