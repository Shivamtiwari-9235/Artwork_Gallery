import React from 'react'
// Import PrimeReact theme and styles
import { ArtworkDataTable } from './components/ArtworkDataTable'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import './App.css'

/**
 * Main App Component
 * 
 * The root component of the Artwork DataTable application
 * Renders:
 * - PrimeReact theme styles
 * - Global styles
 * - The main ArtworkDataTable component
 */
function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-brand">
          <div className="logo-dot" />
          <div>
            <h2>Artworks Viewer</h2>
            <small>PrimeReact + TypeScript — Server-side pagination</small>
          </div>
        </div>
      </header>

      {/* Main data table component with pagination and selection */}
      <main>
        <ArtworkDataTable />
      </main>
    </div>
  )
}

export default App
