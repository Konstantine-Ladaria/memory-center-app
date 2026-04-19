// src/app/core/models/historical-event.model.ts

// A utility interface for data that comes back with all translations
export interface LocalizedString {
  en: string;
  ru: string;
  ka: string;
  hy: string;
  az: string;
}

export interface HistoricalEvent {
  id: string;
  date: string; // ISO 8601 Date string (e.g., '1991-04-09')
  title: LocalizedString;
  description: LocalizedString;
  
  // Tagging system for sociological categorization
  tags: string[]; 
  
  // Geographical coordinates [longitude, latitude] for mapping tools like Leaflet or Mapbox
  locationCoordinates?: [number, number]; 
  
  // Linked researchers or publications related to this event
  relatedPublicationIds: string[]; 
}
