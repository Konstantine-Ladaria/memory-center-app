// organization.model.ts

// We use a strict type for the relation so you don't accidentally make a typo later!
export type OrganizationRelationType = 'parent' | 'collaboration' | 'funding' | 'mediaCoverage';

// Assuming you are using the same localized string approach as your researchers
export interface Organization {
  id: string;
  title: {
    [key: string]: string | undefined;
    en: string;
    ka: string;
    ru?: string;
    az?: string;
    hy?: string;
  };
  logoUrl: string;
  logoDarkUrl?: string;
  shortDescription: {
    [key: string]: string | undefined;
    en: string;
    ka: string;
    ru?: string;
    az?: string;
    hy?: string;
  };
  relationType: OrganizationRelationType;

  // Highly recommended optional field for external organizations
  websiteUrl?: string;
}
