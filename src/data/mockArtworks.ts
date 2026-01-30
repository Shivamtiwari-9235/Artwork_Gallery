/**
 * Mock Artworks Data - 80 sample entries for testing
 * Each artwork includes title, artist, place of origin, date range, and inscriptions
 * 
 * This data is used for demo/testing purposes to avoid API rate limits
 */

import type { Artwork } from '../types';

export const mockArtworks: Artwork[] = [
  {
    id: 1,
    title: "The Starry Night",
    artist_display: "Vincent van Gogh",
    place_of_origin: "Netherlands",
    date_start: 1889,
    date_end: 1889,
    inscriptions: "Signed lower left: Vincent"
  },
  {
    id: 2,
    title: "Girl with a Pearl Earring",
    artist_display: "Johannes Vermeer",
    place_of_origin: "Dutch Golden Age",
    date_start: 1665,
    date_end: 1665,
    inscriptions: "NA"
  },
  {
    id: 3,
    title: "The Persistence of Memory",
    artist_display: "Salvador Dalí",
    place_of_origin: "Spain",
    date_start: 1931,
    date_end: 1931,
    inscriptions: "Signed lower right: Dalí"
  },
  {
    id: 4,
    title: "Nighthawks",
    artist_display: "Edward Hopper",
    place_of_origin: "United States",
    date_start: 1942,
    date_end: 1942,
    inscriptions: "NA"
  },
  {
    id: 5,
    title: "Christina's World",
    artist_display: "Andrew Wyeth",
    place_of_origin: "United States",
    date_start: 1948,
    date_end: 1948,
    inscriptions: "Signed lower right"
  },
  {
    id: 6,
    title: "The Great Wave off Kanagawa",
    artist_display: "Katsushika Hokusai",
    place_of_origin: "Japan",
    date_start: 1830,
    date_end: 1832,
    inscriptions: "Woodblock print seal"
  },
  {
    id: 7,
    title: "American Gothic",
    artist_display: "Grant Wood",
    place_of_origin: "United States",
    date_start: 1930,
    date_end: 1930,
    inscriptions: "NA"
  },
  {
    id: 8,
    title: "The Son of Man",
    artist_display: "René Magritte",
    place_of_origin: "Belgium",
    date_start: 1964,
    date_end: 1964,
    inscriptions: "Signed"
  },
  {
    id: 9,
    title: "Wanderer Above the Sea of Fog",
    artist_display: "Caspar David Friedrich",
    place_of_origin: "Germany",
    date_start: 1818,
    date_end: 1818,
    inscriptions: "NA"
  },
  {
    id: 10,
    title: "The Birth of Venus",
    artist_display: "Sandro Botticelli",
    place_of_origin: "Italy",
    date_start: 1484,
    date_end: 1486,
    inscriptions: "Oil tempera on canvas"
  },
  {
    id: 11,
    title: "Liberty Leading the People",
    artist_display: "Eugène Delacroix",
    place_of_origin: "France",
    date_start: 1830,
    date_end: 1830,
    inscriptions: "Exhibited 1831"
  },
  {
    id: 12,
    title: "The Raft of the Medusa",
    artist_display: "Théodore Géricault",
    place_of_origin: "France",
    date_start: 1819,
    date_end: 1819,
    inscriptions: "Oil on canvas"
  },
  {
    id: 13,
    title: "Arrangement in Grey and Black",
    artist_display: "James Abbott McNeill Whistler",
    place_of_origin: "United States",
    date_start: 1871,
    date_end: 1871,
    inscriptions: "Butterfly signature"
  },
  {
    id: 14,
    title: "Bathers at Asnieres",
    artist_display: "Georges Seurat",
    place_of_origin: "France",
    date_start: 1884,
    date_end: 1884,
    inscriptions: "NA"
  },
  {
    id: 15,
    title: "Irises",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1890,
    date_end: 1890,
    inscriptions: "Signed"
  },
  {
    id: 16,
    title: "The Bedroom",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1888,
    date_end: 1889,
    inscriptions: "Signed lower right: Vincent"
  },
  {
    id: 17,
    title: "Sunflowers",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1888,
    date_end: 1889,
    inscriptions: "Signed: Vincent"
  },
  {
    id: 18,
    title: "The Night Cafe",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1888,
    date_end: 1888,
    inscriptions: "NA"
  },
  {
    id: 19,
    title: "Cafe Terrace at Night",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1888,
    date_end: 1888,
    inscriptions: "Signed lower right"
  },
  {
    id: 20,
    title: "Wheat Field with Cypresses",
    artist_display: "Vincent van Gogh",
    place_of_origin: "France",
    date_start: 1889,
    date_end: 1889,
    inscriptions: "Signed"
  },
  {
    id: 21,
    title: "The Scream",
    artist_display: "Edvard Munch",
    place_of_origin: "Norway",
    date_start: 1893,
    date_end: 1910,
    inscriptions: "Multiple versions exist"
  },
  {
    id: 22,
    title: "The Kiss",
    artist_display: "Gustav Klimt",
    place_of_origin: "Austria",
    date_start: 1908,
    date_end: 1908,
    inscriptions: "Oil and gold leaf"
  },
  {
    id: 23,
    title: "Wanderlust",
    artist_display: "Anonymous",
    place_of_origin: "Unknown",
    date_start: 1900,
    date_end: 1920,
    inscriptions: "NA"
  },
  {
    id: 24,
    title: "The Third of May 1808",
    artist_display: "Francisco Goya",
    place_of_origin: "Spain",
    date_start: 1814,
    date_end: 1814,
    inscriptions: "Oil on canvas"
  },
  {
    id: 25,
    title: "Saturn Devouring His Son",
    artist_display: "Francisco Goya",
    place_of_origin: "Spain",
    date_start: 1819,
    date_end: 1823,
    inscriptions: "Black oil on plaster"
  },
  {
    id: 26,
    title: "The Death of Marat",
    artist_display: "Jacques-Louis David",
    place_of_origin: "France",
    date_start: 1793,
    date_end: 1793,
    inscriptions: "Oil on canvas"
  },
  {
    id: 27,
    title: "Wanderer's Rest",
    artist_display: "Caspar David Friedrich",
    place_of_origin: "Germany",
    date_start: 1820,
    date_end: 1820,
    inscriptions: "NA"
  },
  {
    id: 28,
    title: "The Fighting Temeraire",
    artist_display: "J.M.W. Turner",
    place_of_origin: "United Kingdom",
    date_start: 1838,
    date_end: 1839,
    inscriptions: "Oil on canvas"
  },
  {
    id: 29,
    title: "Rain, Steam, and Speed",
    artist_display: "J.M.W. Turner",
    place_of_origin: "United Kingdom",
    date_start: 1844,
    date_end: 1844,
    inscriptions: "NA"
  },
  {
    id: 30,
    title: "The Hay Wain",
    artist_display: "John Constable",
    place_of_origin: "United Kingdom",
    date_start: 1821,
    date_end: 1821,
    inscriptions: "Oil on canvas"
  },
  {
    id: 31,
    title: "Ophelia",
    artist_display: "John Everett Millais",
    place_of_origin: "United Kingdom",
    date_start: 1851,
    date_end: 1852,
    inscriptions: "Oil on canvas"
  },
  {
    id: 32,
    title: "The Lady of Shalott",
    artist_display: "John William Waterhouse",
    place_of_origin: "United Kingdom",
    date_start: 1888,
    date_end: 1892,
    inscriptions: "Oil on canvas"
  },
  {
    id: 33,
    title: "Flaming June",
    artist_display: "Frederic Leighton",
    place_of_origin: "United Kingdom",
    date_start: 1895,
    date_end: 1895,
    inscriptions: "Oil on canvas"
  },
  {
    id: 34,
    title: "The Absinthe Drinker",
    artist_display: "Edgar Degas",
    place_of_origin: "France",
    date_start: 1876,
    date_end: 1876,
    inscriptions: "Oil on canvas"
  },
  {
    id: 35,
    title: "L'Absinthe",
    artist_display: "Henri de Toulouse-Lautrec",
    place_of_origin: "France",
    date_start: 1901,
    date_end: 1901,
    inscriptions: "Lithograph"
  },
  {
    id: 36,
    title: "Moulin Rouge",
    artist_display: "Henri de Toulouse-Lautrec",
    place_of_origin: "France",
    date_start: 1891,
    date_end: 1891,
    inscriptions: "Poster"
  },
  {
    id: 37,
    title: "Two Tahitian Women",
    artist_display: "Paul Gauguin",
    place_of_origin: "France",
    date_start: 1899,
    date_end: 1899,
    inscriptions: "Oil on canvas"
  },
  {
    id: 38,
    title: "Where Do We Come From",
    artist_display: "Paul Gauguin",
    place_of_origin: "France",
    date_start: 1897,
    date_end: 1898,
    inscriptions: "Oil on canvas"
  },
  {
    id: 39,
    title: "Mont Sainte-Victoire",
    artist_display: "Paul Cézanne",
    place_of_origin: "France",
    date_start: 1885,
    date_end: 1906,
    inscriptions: "Multiple versions"
  },
  {
    id: 40,
    title: "Still Life with Apples",
    artist_display: "Paul Cézanne",
    place_of_origin: "France",
    date_start: 1890,
    date_end: 1894,
    inscriptions: "Oil on canvas"
  },
  {
    id: 41,
    title: "The Card Players",
    artist_display: "Paul Cézanne",
    place_of_origin: "France",
    date_start: 1892,
    date_end: 1896,
    inscriptions: "Oil on canvas"
  },
  {
    id: 42,
    title: "Les Demoiselles d'Avignon",
    artist_display: "Pablo Picasso",
    place_of_origin: "Spain",
    date_start: 1907,
    date_end: 1907,
    inscriptions: "Oil on canvas"
  },
  {
    id: 43,
    title: "Weeping Woman",
    artist_display: "Pablo Picasso",
    place_of_origin: "Spain",
    date_start: 1937,
    date_end: 1937,
    inscriptions: "Oil on canvas"
  },
  {
    id: 44,
    title: "The Old Guitarist",
    artist_display: "Pablo Picasso",
    place_of_origin: "Spain",
    date_start: 1903,
    date_end: 1904,
    inscriptions: "Oil on wood"
  },
  {
    id: 45,
    title: "Guernica",
    artist_display: "Pablo Picasso",
    place_of_origin: "Spain",
    date_start: 1937,
    date_end: 1937,
    inscriptions: "Oil and enamel on canvas"
  },
  {
    id: 46,
    title: "The Temptation of Saint Anthony",
    artist_display: "Max Ernst",
    place_of_origin: "Germany",
    date_start: 1945,
    date_end: 1945,
    inscriptions: "Oil on canvas"
  },
  {
    id: 47,
    title: "Nighttime Reverie",
    artist_display: "Marc Chagall",
    place_of_origin: "Belarus",
    date_start: 1939,
    date_end: 1943,
    inscriptions: "Oil on canvas"
  },
  {
    id: 48,
    title: "I and the Village",
    artist_display: "Marc Chagall",
    place_of_origin: "Belarus",
    date_start: 1911,
    date_end: 1912,
    inscriptions: "Oil on canvas"
  },
  {
    id: 49,
    title: "The Persistence of Time",
    artist_display: "Salvador Dalí",
    place_of_origin: "Spain",
    date_start: 1931,
    date_end: 1931,
    inscriptions: "Oil on canvas"
  },
  {
    id: 50,
    title: "Swans Reflecting Elephants",
    artist_display: "Salvador Dalí",
    place_of_origin: "Spain",
    date_start: 1937,
    date_end: 1937,
    inscriptions: "Oil on canvas"
  },
  {
    id: 51,
    title: "Metamorphosis of Narcissus",
    artist_display: "Salvador Dalí",
    place_of_origin: "Spain",
    date_start: 1937,
    date_end: 1937,
    inscriptions: "Oil on canvas"
  },
  {
    id: 52,
    title: "The Eye of Time",
    artist_display: "Salvador Dalí",
    place_of_origin: "Spain",
    date_start: 1949,
    date_end: 1949,
    inscriptions: "NA"
  },
  {
    id: 53,
    title: "Untitled Abstraction",
    artist_display: "Jackson Pollock",
    place_of_origin: "United States",
    date_start: 1948,
    date_end: 1948,
    inscriptions: "Drip painting"
  },
  {
    id: 54,
    title: "Number 5",
    artist_display: "Jackson Pollock",
    place_of_origin: "United States",
    date_start: 1948,
    date_end: 1948,
    inscriptions: "Oil on canvas"
  },
  {
    id: 55,
    title: "Blue II",
    artist_display: "Joan Mitchell",
    place_of_origin: "United States",
    date_start: 1961,
    date_end: 1961,
    inscriptions: "Oil on canvas"
  },
  {
    id: 56,
    title: "White on White",
    artist_display: "Kazimir Malevich",
    place_of_origin: "Russia",
    date_start: 1918,
    date_end: 1918,
    inscriptions: "Oil on linen"
  },
  {
    id: 57,
    title: "Composition VIII",
    artist_display: "Wassily Kandinsky",
    place_of_origin: "Russia",
    date_start: 1923,
    date_end: 1923,
    inscriptions: "Oil on canvas"
  },
  {
    id: 58,
    title: "Yellow-Red-Blue",
    artist_display: "Wassily Kandinsky",
    place_of_origin: "Russia",
    date_start: 1925,
    date_end: 1925,
    inscriptions: "Oil on canvas"
  },
  {
    id: 59,
    title: "Suprematism",
    artist_display: "Kazimir Malevich",
    place_of_origin: "Russia",
    date_start: 1915,
    date_end: 1915,
    inscriptions: "Oil on canvas"
  },
  {
    id: 60,
    title: "Bridging Continents",
    artist_display: "Anonymous",
    place_of_origin: "International",
    date_start: 2000,
    date_end: 2000,
    inscriptions: "NA"
  },
  {
    id: 61,
    title: "Digital Dreams",
    artist_display: "Contemporary Artist",
    place_of_origin: "United States",
    date_start: 2010,
    date_end: 2015,
    inscriptions: "Mixed media"
  },
  {
    id: 62,
    title: "Abstract Harmony",
    artist_display: "Modern Painter",
    place_of_origin: "Europe",
    date_start: 1998,
    date_end: 2005,
    inscriptions: "Oil and acrylic"
  },
  {
    id: 63,
    title: "Urban Landscape",
    artist_display: "City Artist",
    place_of_origin: "Japan",
    date_start: 2008,
    date_end: 2012,
    inscriptions: "NA"
  },
  {
    id: 64,
    title: "Nature's Whisper",
    artist_display: "Environmental Artist",
    place_of_origin: "Australia",
    date_start: 2005,
    date_end: 2009,
    inscriptions: "Installation"
  },
  {
    id: 65,
    title: "Chromatic Journey",
    artist_display: "Color Theorist",
    place_of_origin: "Brazil",
    date_start: 2002,
    date_end: 2008,
    inscriptions: "Acrylic on panel"
  },
  {
    id: 66,
    title: "Temporal Flow",
    artist_display: "Time Artist",
    place_of_origin: "Canada",
    date_start: 2007,
    date_end: 2011,
    inscriptions: "Video art"
  },
  {
    id: 67,
    title: "Spatial Geometry",
    artist_display: "Geometric Master",
    place_of_origin: "Mexico",
    date_start: 2004,
    date_end: 2010,
    inscriptions: "NA"
  },
  {
    id: 68,
    title: "Emotional Spectrum",
    artist_display: "Expressionist",
    place_of_origin: "South Korea",
    date_start: 2009,
    date_end: 2014,
    inscriptions: "Mixed technique"
  },
  {
    id: 69,
    title: "Cultural Fusion",
    artist_display: "Global Artist",
    place_of_origin: "India",
    date_start: 2003,
    date_end: 2009,
    inscriptions: "Traditional and modern"
  },
  {
    id: 70,
    title: "Minimalist Vision",
    artist_display: "Reduction Artist",
    place_of_origin: "Scandinavia",
    date_start: 2006,
    date_end: 2012,
    inscriptions: "NA"
  },
  {
    id: 71,
    title: "Chaotic Order",
    artist_display: "Chaos Theorist",
    place_of_origin: "China",
    date_start: 2001,
    date_end: 2007,
    inscriptions: "Ink and watercolor"
  },
  {
    id: 72,
    title: "Light and Shadow",
    artist_display: "Luminous Painter",
    place_of_origin: "Italy",
    date_start: 2005,
    date_end: 2010,
    inscriptions: "Chiaroscuro technique"
  },
  {
    id: 73,
    title: "Molecular Structures",
    artist_display: "Scientific Artist",
    place_of_origin: "Switzerland",
    date_start: 2008,
    date_end: 2013,
    inscriptions: "NA"
  },
  {
    id: 74,
    title: "Quantum Reality",
    artist_display: "Physics Artist",
    place_of_origin: "Germany",
    date_start: 2004,
    date_end: 2011,
    inscriptions: "Digital projection"
  },
  {
    id: 75,
    title: "Cosmic Wonder",
    artist_display: "Space Visionary",
    place_of_origin: "Russia",
    date_start: 2007,
    date_end: 2012,
    inscriptions: "Oil and metallic paint"
  },
  {
    id: 76,
    title: "Ethereal Moments",
    artist_display: "Transcendental Artist",
    place_of_origin: "Tibet",
    date_start: 2003,
    date_end: 2009,
    inscriptions: "NA"
  },
  {
    id: 77,
    title: "Digital Revolution",
    artist_display: "Tech Pioneer",
    place_of_origin: "Silicon Valley",
    date_start: 2010,
    date_end: 2015,
    inscriptions: "3D rendering"
  },
  {
    id: 78,
    title: "Ancestral Echoes",
    artist_display: "Heritage Keeper",
    place_of_origin: "Africa",
    date_start: 2002,
    date_end: 2009,
    inscriptions: "Traditional pattern"
  },
  {
    id: 79,
    title: "Serenity Found",
    artist_display: "Zen Master",
    place_of_origin: "Japan",
    date_start: 2006,
    date_end: 2011,
    inscriptions: "NA"
  },
  {
    id: 80,
    title: "Final Vision",
    artist_display: "Visionary Artist",
    place_of_origin: "Global",
    date_start: 2009,
    date_end: 2014,
    inscriptions: "Mixed media masterpiece"
  }
];
