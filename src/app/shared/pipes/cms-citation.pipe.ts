import { Pipe, PipeTransform } from '@angular/core';
// 1. Add PublicationAuthor to your imports
import {
  Publication,
  BasePublication,
  PublicationAuthor,
} from '../../core/models/publication.model';

@Pipe({
  name: 'cmsCitation',
  standalone: true, // Assuming you are using standalone components/pipes!
})
export class cmsCitation implements PipeTransform {
  transform(pub: Publication): string {
    const authorString = this.formatAuthors(pub.authors);

    switch (pub.type) {
      case 'book':
        return `${authorString} <i>${pub.title}</i>. ${pub.city}: ${pub.publisher}, ${pub.year}.`;

      case 'journal-article':
        let citation = `${authorString} "${pub.title}." <i>${pub.journalName}</i>`;
        if (pub.volume) citation += ` ${pub.volume}`;
        if (pub.issue) citation += `, no. ${pub.issue}`;
        citation += ` (${pub.year})`;
        if (pub.pages) citation += `: ${pub.pages}.`;
        else citation += `.`;
        return citation;

      case 'book-chapter':
        const editorString = pub.editors.join(', ');
        return `${authorString} "${pub.title}." In <i>${pub.bookTitle}</i>, edited by ${editorString}, ${pub.pages}. ${pub.city}: ${pub.publisher}, ${pub.year}.`;

      case 'report':
        return `${authorString} "${pub.title}." ${pub.institution}, ${pub.year}.`;

      default:
        const fallback = pub as BasePublication;
        return `${authorString} <i>${fallback.title}</i>. ${fallback.year}.`;
    }
  }

  // 2. Update the parameter type here
  private formatAuthors(authors: PublicationAuthor[]): string {
    if (!authors || authors.length === 0) return '';

    // 3. Extract the names into a standard string array first
    // This also prevents .pop() from destroying your actual data array!
    const names = authors.map((author) => author.name);

    if (names.length === 1) return `${names[0]}.`;
    if (names.length === 2) return `${names[0]}, and ${names[1]}.`;

    // For 3+ authors
    const last = names.pop();
    return `${names.join(', ')}, and ${last}.`;
  }
}
