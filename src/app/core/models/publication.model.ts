// 1. Define the exact types of publications your center produces
export type PublicationType = 'book' | 'book-chapter' | 'journal-article' | 'report';

// 2. Define the Author Interface (Handles both internal researchers and external writers)
export interface PublicationAuthor {
  name: string; // The full display name (e.g., 'Malkhaz Toria' or 'Stephen F. Jones')
  researcherId?: string; // Optional: The ID to link to their profile (e.g., 'malkhaz-toria')
}

// 3. Define the Base Interface (Fields EVERY publication shares)
export interface BasePublication {
  id: string;
  type: PublicationType;
  title: string;

  // Array of author objects rather than plain strings
  authors: PublicationAuthor[];

  year: number;
  language: string; // e.g., 'en', 'ka', 'ru'

  // Unified URL for the publication (PDF, publisher site, etc.)
  publicationUrl?: string;

  // Backward-link to associate this publication with a specific project
  projectId?: string;

  doi?: string; // Digital Object Identifier
  abstract?: string;
}

// 4. Define specific interfaces for each type

export interface Book extends BasePublication {
  type: 'book';
  publisher: string;
  city: string;
  edition?: string;
}

export interface BookChapter extends BasePublication {
  type: 'book-chapter';
  bookTitle: string;
  editors: string[];
  publisher: string;
  city: string;
  pages: string; // e.g., "45-67"
}

export interface JournalArticle extends BasePublication {
  type: 'journal-article';
  journalName: string;
  volume?: string | number;
  issue?: string | number;
  pages?: string; // e.g., "112-130"
  specialIssueTitle?: string; // Optional: For themed collections
}

export interface Report extends BasePublication {
  type: 'report';
  institution: string; // e.g., "Memory Studies Center in the Caucasus"
  reportNumber?: string;
}

// 5. Export the Union Type
// This is the actual type you will use in your Angular components!
export type Publication = Book | BookChapter | JournalArticle | Report;
