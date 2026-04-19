import { LocalizedString } from './researcher.model';

export type ProjectStatus = 'ongoing' | 'completed' | 'planned';

export interface ProjectFunder {
  name: LocalizedString;
  logoUrl?: string; // URL for the funder's logo
  websiteUrl?: string; // Optional link to the funder's website
}

export interface ProjectResult {
  title: LocalizedString;
  description?: LocalizedString; // Optional context about the result
  externalLink?: string; // URL to the PDF, video, or external publication
}

export interface Project {
  id: string;

  title: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription?: LocalizedString;

  status: ProjectStatus;
  startDate: string;
  endDate?: string;

  funders?: ProjectFunder[];

  // --- NEW: Partner Institutions ---
  partnerInstitutions?: LocalizedString[];

  results?: ProjectResult[];

  principalInvestigatorId?: string;

  // --- NEW: Project Coordinator ---
  coordinatorId?: string;

  teamMemberIds?: string[];
  relatedPublicationIds?: string[];

  featuredImageUrl?: string;
  externalWebsiteUrl?: string;
}
