export type City = {
  name: string
  country: string
  continent: string
  lat: number
  lon: number
  slug: string
}

export const CITIES: City[] = [
  // EUROPE
  { name: 'Vienna', country: 'Austria', continent: 'Europe', lat: 48.2082, lon: 16.3738, slug: 'vienna' },
  { name: 'Paris', country: 'France', continent: 'Europe', lat: 48.8566, lon: 2.3522, slug: 'paris' },
  { name: 'London', country: 'UK', continent: 'Europe', lat: 51.5074, lon: -0.1278, slug: 'london' },
  { name: 'Berlin', country: 'Germany', continent: 'Europe', lat: 52.5200, lon: 13.4050, slug: 'berlin' },
  { name: 'Rome', country: 'Italy', continent: 'Europe', lat: 41.9028, lon: 12.4964, slug: 'rome' },
  { name: 'Madrid', country: 'Spain', continent: 'Europe', lat: 40.4168, lon: -3.7038, slug: 'madrid' },
  { name: 'Barcelona', country: 'Spain', continent: 'Europe', lat: 41.3851, lon: 2.1734, slug: 'barcelona' },
  { name: 'Amsterdam', country: 'Netherlands', continent: 'Europe', lat: 52.3676, lon: 4.9041, slug: 'amsterdam' },
  { name: 'Brussels', country: 'Belgium', continent: 'Europe', lat: 50.8503, lon: 4.3517, slug: 'brussels' },
  { name: 'Zurich', country: 'Switzerland', continent: 'Europe', lat: 47.3769, lon: 8.5417, slug: 'zurich' },
  { name: 'Geneva', country: 'Switzerland', continent: 'Europe', lat: 46.2044, lon: 6.1432, slug: 'geneva' },
  { name: 'Prague', country: 'Czech Republic', continent: 'Europe', lat: 50.0755, lon: 14.4378, slug: 'prague' },
  { name: 'Warsaw', country: 'Poland', continent: 'Europe', lat: 52.2297, lon: 21.0122, slug: 'warsaw' },
  { name: 'Budapest', country: 'Hungary', continent: 'Europe', lat: 47.4979, lon: 19.0402, slug: 'budapest' },
  { name: 'Bucharest', country: 'Romania', continent: 'Europe', lat: 44.4268, lon: 26.1025, slug: 'bucharest' },
  { name: 'Athens', country: 'Greece', continent: 'Europe', lat: 37.9838, lon: 23.7275, slug: 'athens' },
  { name: 'Lisbon', country: 'Portugal', continent: 'Europe', lat: 38.7223, lon: -9.1393, slug: 'lisbon' },
  { name: 'Stockholm', country: 'Sweden', continent: 'Europe', lat: 59.3293, lon: 18.0686, slug: 'stockholm' },
  { name: 'Oslo', country: 'Norway', continent: 'Europe', lat: 59.9139, lon: 10.7522, slug: 'oslo' },
  { name: 'Copenhagen', country: 'Denmark', continent: 'Europe', lat: 55.6761, lon: 12.5683, slug: 'copenhagen' },
  { name: 'Helsinki', country: 'Finland', continent: 'Europe', lat: 60.1699, lon: 24.9384, slug: 'helsinki' },
  { name: 'Dublin', country: 'Ireland', continent: 'Europe', lat: 53.3498, lon: -6.2603, slug: 'dublin' },
  { name: 'Milan', country: 'Italy', continent: 'Europe', lat: 45.4642, lon: 9.1900, slug: 'milan' },
  { name: 'Munich', country: 'Germany', continent: 'Europe', lat: 48.1351, lon: 11.5820, slug: 'munich' },
  { name: 'Hamburg', country: 'Germany', continent: 'Europe', lat: 53.5753, lon: 10.0153, slug: 'hamburg' },
  { name: 'Frankfurt', country: 'Germany', continent: 'Europe', lat: 50.1109, lon: 8.6821, slug: 'frankfurt' },
  { name: 'Kyiv', country: 'Ukraine', continent: 'Europe', lat: 50.4501, lon: 30.5234, slug: 'kyiv' },
  { name: 'Moscow', country: 'Russia', continent: 'Europe', lat: 55.7558, lon: 37.6173, slug: 'moscow' },
  { name: 'Istanbul', country: 'Turkey', continent: 'Europe', lat: 41.0082, lon: 28.9784, slug: 'istanbul' },
  { name: 'Sarajevo', country: 'Bosnia', continent: 'Europe', lat: 43.8563, lon: 18.4131, slug: 'sarajevo' },
  { name: 'Zagreb', country: 'Croatia', continent: 'Europe', lat: 45.8150, lon: 15.9819, slug: 'zagreb' },
  { name: 'Belgrade', country: 'Serbia', continent: 'Europe', lat: 44.8176, lon: 20.4633, slug: 'belgrade' },
  { name: 'Sofia', country: 'Bulgaria', continent: 'Europe', lat: 42.6977, lon: 23.3219, slug: 'sofia' },
  { name: 'Riga', country: 'Latvia', continent: 'Europe', lat: 56.9496, lon: 24.1052, slug: 'riga' },
  { name: 'Vilnius', country: 'Lithuania', continent: 'Europe', lat: 54.6872, lon: 25.2797, slug: 'vilnius' },
  { name: 'Tallinn', country: 'Estonia', continent: 'Europe', lat: 59.4370, lon: 24.7536, slug: 'tallinn' },
  { name: 'Bratislava', country: 'Slovakia', continent: 'Europe', lat: 48.1486, lon: 17.1077, slug: 'bratislava' },
  { name: 'Ljubljana', country: 'Slovenia', continent: 'Europe', lat: 46.0569, lon: 14.5058, slug: 'ljubljana' },

  // NORTH AMERICA
  { name: 'New York', country: 'USA', continent: 'North America', lat: 40.7128, lon: -74.0060, slug: 'new-york' },
  { name: 'Los Angeles', country: 'USA', continent: 'North America', lat: 34.0522, lon: -118.2437, slug: 'los-angeles' },
  { name: 'Chicago', country: 'USA', continent: 'North America', lat: 41.8781, lon: -87.6298, slug: 'chicago' },
  { name: 'Houston', country: 'USA', continent: 'North America', lat: 29.7604, lon: -95.3698, slug: 'houston' },
  { name: 'Miami', country: 'USA', continent: 'North America', lat: 25.7617, lon: -80.1918, slug: 'miami' },
  { name: 'San Francisco', country: 'USA', continent: 'North America', lat: 37.7749, lon: -122.4194, slug: 'san-francisco' },
  { name: 'Seattle', country: 'USA', continent: 'North America', lat: 47.6062, lon: -122.3321, slug: 'seattle' },
  { name: 'Boston', country: 'USA', continent: 'North America', lat: 42.3601, lon: -71.0589, slug: 'boston' },
  { name: 'Dallas', country: 'USA', continent: 'North America', lat: 32.7767, lon: -96.7970, slug: 'dallas' },
  { name: 'Las Vegas', country: 'USA', continent: 'North America', lat: 36.1699, lon: -115.1398, slug: 'las-vegas' },
  { name: 'Toronto', country: 'Canada', continent: 'North America', lat: 43.6532, lon: -79.3832, slug: 'toronto' },
  { name: 'Vancouver', country: 'Canada', continent: 'North America', lat: 49.2827, lon: -123.1207, slug: 'vancouver' },
  { name: 'Montreal', country: 'Canada', continent: 'North America', lat: 45.5017, lon: -73.5673, slug: 'montreal' },
  { name: 'Mexico City', country: 'Mexico', continent: 'North America', lat: 19.4326, lon: -99.1332, slug: 'mexico-city' },
  { name: 'Cancun', country: 'Mexico', continent: 'North America', lat: 21.1619, lon: -86.8515, slug: 'cancun' },

  // SOUTH AMERICA
  { name: 'São Paulo', country: 'Brazil', continent: 'South America', lat: -23.5505, lon: -46.6333, slug: 'sao-paulo' },
  { name: 'Rio de Janeiro', country: 'Brazil', continent: 'South America', lat: -22.9068, lon: -43.1729, slug: 'rio-de-janeiro' },
  { name: 'Buenos Aires', country: 'Argentina', continent: 'South America', lat: -34.6037, lon: -58.3816, slug: 'buenos-aires' },
  { name: 'Lima', country: 'Peru', continent: 'South America', lat: -12.0464, lon: -77.0428, slug: 'lima' },
  { name: 'Bogota', country: 'Colombia', continent: 'South America', lat: 4.7110, lon: -74.0721, slug: 'bogota' },
  { name: 'Santiago', country: 'Chile', continent: 'South America', lat: -33.4489, lon: -70.6693, slug: 'santiago' },

  // ASIA
  { name: 'Dubai', country: 'UAE', continent: 'Asia', lat: 25.2048, lon: 55.2708, slug: 'dubai' },
  { name: 'Abu Dhabi', country: 'UAE', continent: 'Asia', lat: 24.4539, lon: 54.3773, slug: 'abu-dhabi' },
  { name: 'Riyadh', country: 'Saudi Arabia', continent: 'Asia', lat: 24.7136, lon: 46.6753, slug: 'riyadh' },
  { name: 'Doha', country: 'Qatar', continent: 'Asia', lat: 25.2854, lon: 51.5310, slug: 'doha' },
  { name: 'Kuwait City', country: 'Kuwait', continent: 'Asia', lat: 29.3759, lon: 47.9774, slug: 'kuwait-city' },
  { name: 'Mumbai', country: 'India', continent: 'Asia', lat: 19.0760, lon: 72.8777, slug: 'mumbai' },
  { name: 'Delhi', country: 'India', continent: 'Asia', lat: 28.6139, lon: 77.2090, slug: 'delhi' },
  { name: 'Bangalore', country: 'India', continent: 'Asia', lat: 12.9716, lon: 77.5946, slug: 'bangalore' },
  { name: 'Karachi', country: 'Pakistan', continent: 'Asia', lat: 24.8607, lon: 67.0011, slug: 'karachi' },
  { name: 'Lahore', country: 'Pakistan', continent: 'Asia', lat: 31.5204, lon: 74.3587, slug: 'lahore' },
  { name: 'Dhaka', country: 'Bangladesh', continent: 'Asia', lat: 23.8103, lon: 90.4125, slug: 'dhaka' },
  { name: 'Colombo', country: 'Sri Lanka', continent: 'Asia', lat: 6.9271, lon: 79.8612, slug: 'colombo' },
  { name: 'Tokyo', country: 'Japan', continent: 'Asia', lat: 35.6762, lon: 139.6503, slug: 'tokyo' },
  { name: 'Osaka', country: 'Japan', continent: 'Asia', lat: 34.6937, lon: 135.5023, slug: 'osaka' },
  { name: 'Seoul', country: 'South Korea', continent: 'Asia', lat: 37.5665, lon: 126.9780, slug: 'seoul' },
  { name: 'Beijing', country: 'China', continent: 'Asia', lat: 39.9042, lon: 116.4074, slug: 'beijing' },
  { name: 'Shanghai', country: 'China', continent: 'Asia', lat: 31.2304, lon: 121.4737, slug: 'shanghai' },
  { name: 'Hong Kong', country: 'China', continent: 'Asia', lat: 22.3193, lon: 114.1694, slug: 'hong-kong' },
  { name: 'Singapore', country: 'Singapore', continent: 'Asia', lat: 1.3521, lon: 103.8198, slug: 'singapore' },
  { name: 'Bangkok', country: 'Thailand', continent: 'Asia', lat: 13.7563, lon: 100.5018, slug: 'bangkok' },
  { name: 'Kuala Lumpur', country: 'Malaysia', continent: 'Asia', lat: 3.1390, lon: 101.6869, slug: 'kuala-lumpur' },
  { name: 'Jakarta', country: 'Indonesia', continent: 'Asia', lat: -6.2088, lon: 106.8456, slug: 'jakarta' },
  { name: 'Manila', country: 'Philippines', continent: 'Asia', lat: 14.5995, lon: 120.9842, slug: 'manila' },
  { name: 'Ho Chi Minh City', country: 'Vietnam', continent: 'Asia', lat: 10.8231, lon: 106.6297, slug: 'ho-chi-minh-city' },
  { name: 'Hanoi', country: 'Vietnam', continent: 'Asia', lat: 21.0285, lon: 105.8542, slug: 'hanoi' },
  { name: 'Taipei', country: 'Taiwan', continent: 'Asia', lat: 25.0330, lon: 121.5654, slug: 'taipei' },
  { name: 'Kathmandu', country: 'Nepal', continent: 'Asia', lat: 27.7172, lon: 85.3240, slug: 'kathmandu' },
  { name: 'Islamabad', country: 'Pakistan', continent: 'Asia', lat: 33.6844, lon: 73.0479, slug: 'islamabad' },
  { name: 'Muscat', country: 'Oman', continent: 'Asia', lat: 23.5880, lon: 58.3829, slug: 'muscat' },
  { name: 'Beirut', country: 'Lebanon', continent: 'Asia', lat: 33.8938, lon: 35.5018, slug: 'beirut' },
  { name: 'Tel Aviv', country: 'Israel', continent: 'Asia', lat: 32.0853, lon: 34.7818, slug: 'tel-aviv' },
  { name: 'Amman', country: 'Jordan', continent: 'Asia', lat: 31.9454, lon: 35.9284, slug: 'amman' },
  { name: 'Bali', country: 'Indonesia', continent: 'Asia', lat: -8.3405, lon: 115.0920, slug: 'bali' },

  // AFRICA
  { name: 'Cairo', country: 'Egypt', continent: 'Africa', lat: 30.0444, lon: 31.2357, slug: 'cairo' },
  { name: 'Lagos', country: 'Nigeria', continent: 'Africa', lat: 6.5244, lon: 3.3792, slug: 'lagos' },
  { name: 'Nairobi', country: 'Kenya', continent: 'Africa', lat: -1.2921, lon: 36.8219, slug: 'nairobi' },
  { name: 'Johannesburg', country: 'South Africa', continent: 'Africa', lat: -26.2041, lon: 28.0473, slug: 'johannesburg' },
  { name: 'Cape Town', country: 'South Africa', continent: 'Africa', lat: -33.9249, lon: 18.4241, slug: 'cape-town' },
  { name: 'Casablanca', country: 'Morocco', continent: 'Africa', lat: 33.5731, lon: -7.5898, slug: 'casablanca' },
  { name: 'Accra', country: 'Ghana', continent: 'Africa', lat: 5.6037, lon: -0.1870, slug: 'accra' },
  { name: 'Addis Ababa', country: 'Ethiopia', continent: 'Africa', lat: 9.0320, lon: 38.7469, slug: 'addis-ababa' },
  { name: 'Dar es Salaam', country: 'Tanzania', continent: 'Africa', lat: -6.7924, lon: 39.2083, slug: 'dar-es-salaam' },

  // OCEANIA
  { name: 'Sydney', country: 'Australia', continent: 'Oceania', lat: -33.8688, lon: 151.2093, slug: 'sydney' },
  { name: 'Melbourne', country: 'Australia', continent: 'Oceania', lat: -37.8136, lon: 144.9631, slug: 'melbourne' },
  { name: 'Brisbane', country: 'Australia', continent: 'Oceania', lat: -27.4698, lon: 153.0251, slug: 'brisbane' },
  { name: 'Perth', country: 'Australia', continent: 'Oceania', lat: -31.9505, lon: 115.8605, slug: 'perth' },
  { name: 'Auckland', country: 'New Zealand', continent: 'Oceania', lat: -36.8509, lon: 174.7645, slug: 'auckland' },
]

// Haversine formula — pure math, no API needed
export function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// Travel time calculations
export function getTravelTimes(distanceKm: number, crossesOcean: boolean) {
  const flyingHours = distanceKm < 500
  ? distanceKm / 400 + 0.5        // Kurzstrecke: +30min overhead
  : distanceKm < 1500
  ? distanceKm / 600 + 0.75       // Mittelstrecke: +45min overhead  
  : distanceKm < 4000
  ? distanceKm / 700 + 0.75       // Langstrecke: +45min overhead
  : distanceKm / 800 + 0.5        // Ultralang: weniger overhead, bessere Speeds
  const drivingHours = distanceKm < 200
  ? distanceKm / 70     // Stadtverkehr, kurze Strecken
  : distanceKm < 1000
  ? distanceKm / 100    // Hauptsächlich Autobahn
  : distanceKm / 95     // Lange Strecken mit Pausen eingerechnet
  const walkingHours = distanceKm / 5
  const swimmingHours = distanceKm / 3
  const shipHours = distanceKm / 35

  // Walking + swimming combined for ocean crossings
  // Estimate: 30% of distance is water for intercontinental
  const walkSwimHours = crossesOcean
    ? (distanceKm * 0.4) / 5 + (distanceKm * 0.6) / 3
    : walkingHours

  return {
    flying: flyingHours,
    driving: drivingHours,
    walking: walkingHours,
    walkSwim: walkSwimHours,
    ship: shipHours,
  }
}

export function formatDuration(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`
  const days = Math.floor(hours / 24)
  const remainingHours = Math.round(hours % 24)
  if (days === 0) return `${Math.round(hours)}h`
  if (remainingHours === 0) return `${days} days`
  return `${days} days, ${remainingHours}h`
}

export function crossesOcean(continent1: string, continent2: string): boolean {
  return continent1 !== continent2
}

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug)
}

export function getNearbyCities(city: City, count: number = 6): City[] {
  return CITIES
    .filter(c => c.slug !== city.slug)
    .map(c => ({
      city: c,
      distance: getDistanceKm(city.lat, city.lon, c.lat, c.lon)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map(item => item.city)
}