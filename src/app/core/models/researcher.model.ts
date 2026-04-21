export interface LocalizedString {
  [key: string]: string | undefined;
  en: string;
  ka: string;
  ru: string;
  az: string;
  hy: string;
}

// --- NEW: Define the specific types of researchers ---
export type ResearcherAffiliation = 'member' | 'collaborator';

export interface Researcher {
  id: string;

  // --- NEW: Affiliation Status ---
  affiliation: ResearcherAffiliation;

  // Translatable Text Fields
  firstName: LocalizedString;
  lastName: LocalizedString;
  title: LocalizedString;
  bio: LocalizedString;

  // Array of translatable strings
  disciplines: LocalizedString[];

  // Universal Data (No translation needed)
  email: string;
  photoUrl?: string;
  isFeatured?: boolean;

  // --- External Profiles ---
  facebookUrl?: string;
  researchGateUrl?: string;
  academiaUrl?: string;

  // --- Relational Data ---
  parentOrganizationId?: string;
  publicationIds?: string[];
}
