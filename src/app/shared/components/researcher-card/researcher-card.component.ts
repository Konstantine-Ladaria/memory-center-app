import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

// Adjust these paths if your IDE gives a red squiggly line!
import { ResearcherService } from '../../../features/researchers/services/researcher.service';
import { Researcher } from '../../../core/models/researcher.model';

@Component({
  selector: 'app-researcher-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './researcher-card.component.html',
  styleUrls: ['./researcher-card.component.css'],
})
export class ResearcherCardComponent implements OnInit, OnDestroy {
  // 1. This catches the ID passed from the project-detail HTML
  @Input() researcherId!: string;

  // 2. This holds the data once it's fetched
  researcher?: Researcher;

  // 3. This tracks the current language for the HTML template
  lang: string = 'ka';

  private langSub!: Subscription;

  constructor(
    private researcherService: ResearcherService,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    // A. Setup the initial language
    this.lang = this.translate.currentLang || this.translate.getDefaultLang() || 'ka';

    // B. Keep the language updated if the user clicks the dropdown
    this.langSub = this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });

    // C. MAGIC HAPPENS HERE: Fetch the researcher data using the ID!
    if (this.researcherId) {
      this.researcherService.getResearcherById(this.researcherId).subscribe({
        next: (data) => {
          this.researcher = data;
        },
        error: (err) => {
          console.error('Failed to load researcher card:', err);
        },
      });
    }
  }
  getLocalized(obj: any): string {
    if (!obj) return '';
    return obj[this.lang] || obj['en'] || '';
  }
  ngOnDestroy(): void {
    // Clean up memory
    if (this.langSub) this.langSub.unsubscribe();
  }
}
