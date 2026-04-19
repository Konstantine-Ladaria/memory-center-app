import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Publication } from '../../../core/models/publication.model';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  // The complete mock data with unified URLs and Project backward-links
  private mockPublications: Publication[] = [
    {
      id: 'pub-jones-toria-2021',
      type: 'journal-article',
      title:
        'Introduction: Rethinking Memory Sites and Symbolic Realms of Georgian National Identity',
      authors: [
        { name: 'Stephen F. Jones', researcherId: 'stephen-jones' },
        { name: 'Malkhaz Toria', researcherId: 'malkhaz-toria' },
      ],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '211-219',
      doi: '10.1080/23761199.2021.1975975',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2021.1975975',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
    {
      id: 'pub-chkhaidze-kakitelashvili-2021',
      type: 'journal-article',
      title:
        'A national figure as a memory site: reinterpretations of Ilia Chavchavadze in the 1910s–1940s',
      authors: [{ name: 'Irakli Chkhaidze' }, { name: 'Ketevan Kakitelashvili' }],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '220-234',
      doi: '10.1080/23761199.2021.1961552',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2021.1961552',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
    {
      id: 'pub-chikovani-2021',
      type: 'journal-article',
      title: 'The Mtatsminda Pantheon: a memory site and symbol of identity',
      authors: [{ name: 'Nino Chikovani', researcherId: 'nino-chikovani' }],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '235-249',
      doi: '10.1080/23761199.2020.1871242',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2020.1871242',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
    {
      id: 'pub-kekelia-reisner-2021',
      type: 'journal-article',
      title: 'Golden or pink – Stalin as an embattled memory site',
      authors: [
        { name: 'Elene Kekelia', researcherId: 'elene-kekelia' },
        { name: 'Oliver Reisner', researcherId: 'oliver-reisner' },
      ],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '250-269',
      doi: '10.1080/23761199.2020.186773',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2020.186773',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
    {
      id: 'pub-toria-javakhia-2021',
      type: 'journal-article',
      title:
        'Representing fateful events and imagining territorial integrity in Georgia: cultural memory of David the Builder and the Battle of Didgori',
      authors: [
        { name: 'Malkhaz Toria', researcherId: 'malkhaz-toria' },
        { name: 'Bejan Javakhia', researcherId: 'bejan-javakhia' },
      ],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '270-285',
      doi: '10.1080/23761199.2021.1970914',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2021.1970914',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
    {
      id: 'pub-araviashvili-ladaria-2021',
      type: 'journal-article',
      title:
        'Constructing sites of memory and practising nationalism beyond the homeland: Georgian migrants in the USA and Germany',
      authors: [
        { name: 'Maia Araviashvili', researcherId: 'maia-araviashvili' },
        { name: 'Konstantine Ladaria', researcherId: 'konstantine-ladaria' },
      ],
      year: 2021,
      language: 'en',
      journalName: 'Caucasus Survey',
      specialIssueTitle:
        'Memory Sites and Construction of the Past: Rethinking Symbolic Realms of Georgian National Identity',
      volume: 9,
      issue: 3,
      pages: '286-299',
      doi: '10.1080/23761199.2021.1966234',
      publicationUrl: 'https://www.tandfonline.com/doi/full/10.1080/23761199.2021.1966234',
      projectId: 'proj-rustaveli-memory-sites-2018',
    },
  ];

  constructor() {}

  // 1. Fetch all publications
  getAllPublications(): Observable<Publication[]> {
    return of(this.mockPublications).pipe(delay(300));
  }

  // 2. Fetch a specific publication by its ID
  getPublicationById(id: string): Observable<Publication | undefined> {
    return of(this.mockPublications.find((p) => p.id === id)).pipe(delay(300));
  }

  // 3. Fetch all publications associated with a specific researcher ID
  getPublicationsByResearcher(researcherId: string): Observable<Publication[]> {
    return of(
      this.mockPublications.filter((pub) =>
        pub.authors.some((author) => author.researcherId === researcherId),
      ),
    ).pipe(delay(300));
  }

  // 4. NEW: Fetch all publications generated by a specific project ID
  getPublicationsByProjectId(projectId: string): Observable<Publication[]> {
    return of(this.mockPublications.filter((pub) => pub.projectId === projectId)).pipe(delay(300));
  }
}
