import type { ApiResponse } from '../types';

// Base URL for the Art Institute of Chicago API
const API_BASE_URL = 'https://api.artic.edu/api/v1';

/**
 * Fetches artwork data from the Art Institute of Chicago API
 * 
 * This function handles:
 * - Making HTTP requests to the API
 * - Parsing the JSON response
 * - Returning typed data
 * - Handling errors gracefully
 * 
 * @param page - The page number to fetch (1-based indexing)
 * @returns Promise<ApiResponse> - The artwork data with pagination info
 * @throws Error if the API request fails
 * 
 * Example:
 * const data = await fetchArtworks(1);
 * console.log(data.data); // Array of artworks
 */
export const fetchArtworks = async (page: number): Promise<ApiResponse> => {
  try {
    // Construct the API URL with the page parameter
    const apiUrl = `${API_BASE_URL}/artworks?page=${page}`;

    // Make the HTTP request
    const response = await fetch(apiUrl);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the JSON response and cast it to our ApiResponse type
    const data: ApiResponse = await response.json();
    return data;

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching artworks:', error);
    // Re-throw the error so the caller can handle it
    throw error;
  }
};
