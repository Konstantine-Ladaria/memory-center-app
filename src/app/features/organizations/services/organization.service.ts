// organization.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organization } from '../../../core/models/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  // Your internal database of organizations
  private mockOrganizations: Organization[] = [
    {
      id: 'org-iliauni',
      relationType: 'parent',
      title: {
        en: 'Ilia State University',
        ka: 'ილიას სახელმწიფო უნივერსიტეტი',
      },
      shortDescription: {
        en: 'Our parent institution, supporting the core infrastructure and faculty of the center.',
        ka: 'ჩვენი მშობლიური ინსტიტუცია, რომელიც უზრუნველყოფს ცენტრის ძირითად ინფრასტრუქტურასა და აკადემიურ პერსონალს.',
      },
      logoUrl: 'assets/images/organizations/iliauni-logo-dark.png',
      logoDarkUrl: 'assets/images/organizations/iliauni-logo-light.png',
      websiteUrl: 'https://iliauni.edu.ge/',
    },
    {
      id: 'org-tsu',
      relationType: 'collaboration',
      title: {
        en: 'Ivane Javakhishvili Tbilisi State University (TSU)',
        ka: 'ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',
      },
      shortDescription: {
        en: 'Collaborating institution providing joint research initiatives.',
        ka: 'პარტნიორი ინსტიტუცია, რომელთანაც ვახორციელებთ ერთობლივ კვლევით ინიციატივებს.',
      },
      logoUrl: 'assets/images/organizations/tsu-logo.png',
      websiteUrl: 'https://www.tsu.ge/',
    },
    {
      id: 'org-rustaveli',
      relationType: 'funding',
      title: {
        en: 'Shota Rustaveli National Science Foundation',
        ka: 'შოთა რუსთაველის საქართველოს ეროვნული სამეცნიერო ფონდი',
      },
      shortDescription: {
        en: 'Primary funding partner for our major memory studies grants.',
        ka: 'მეხსიერების კვლევების ძირითადი გრანტების მთავარი დამფინანსებელი პარტნიორი.',
      },
      logoUrl: 'assets/images/organizations/rustaveli-logo.png',
      websiteUrl: 'https://rustaveli.org.ge/',
    },
  ];

  constructor() {}

  /**
   * Returns all organizations in the database.
   */
  getAllOrganizations(): Observable<Organization[]> {
    return of(this.mockOrganizations);
  }

  /**
   * Filters organizations by their relationship to the center.
   * Useful for displaying "Our Funders" vs "Media Partners" in separate sections.
   */
  getOrganizationsByRelation(
    type: 'parent' | 'collaboration' | 'funding' | 'mediaCoverage',
  ): Observable<Organization[]> {
    const filtered = this.mockOrganizations.filter((org) => org.relationType === type);
    return of(filtered);
  }

  getOrganizationById(id: string): Observable<Organization | undefined> {
    // Finds the organization in your array that matches the ID
    const foundOrg = this.mockOrganizations.find((org) => org.id === id);

    // Returns it as an Observable so your component can subscribe to it
    return of(foundOrg);
  }
}
