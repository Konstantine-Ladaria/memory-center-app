import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Researcher } from '../../../core/models/researcher.model';
import { Organization } from '../../../core/models/organization.model';
import { OrganizationService } from '../../../features/organizations/services/organization.service';
import { ResearcherService } from '../../../features/researchers/services/researcher.service';

@Component({
  selector: 'app-researcher-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './researcher-card.component.html',
  styleUrls: ['./researcher-card.component.css', './researcher-card-compact.css'],
})
export class ResearcherCardComponent implements OnInit, OnDestroy {
  // 2. We change the '!' to '?' because the object might be empty while loading
  @Input() researcher?: Researcher;

  // 3. Add the new Input for the ID
  @Input() researcherId?: string;

  @Input() layout: 'standard' | 'compact' = 'standard';
  lang: string = 'ka';
  parentOrg: Organization | undefined;

  private langSub!: Subscription;

  constructor(
    private translate: TranslateService,
    private organizationService: OrganizationService,
    private researcherService: ResearcherService, // Inject it here
  ) {}

  ngOnInit(): void {
    this.lang = this.translate.currentLang || this.translate.getDefaultLang() || 'ka';
    this.langSub = this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });

    // 4. The "Smart" Logic:
    // If we were given an ID, but don't have the researcher object yet...
    if (this.researcherId && !this.researcher) {
      this.researcherService.getResearcherById(this.researcherId).subscribe((res) => {
        this.researcher = res;
        this.loadOrganization(); // Fetch the university logo AFTER we have the researcher data
      });
    } else if (this.researcher) {
      // If we were passed the full object immediately, just fetch the org
      this.loadOrganization();
    }
  }

  // Moved this into a helper function so it can be called cleanly
  private loadOrganization(): void {
    if (this.researcher && this.researcher.parentOrganizationId) {
      this.organizationService
        .getOrganizationById(this.researcher.parentOrganizationId)
        .subscribe((org) => {
          this.parentOrg = org;
        });
    }
  }

  getLocalized(obj: any): string {
    if (!obj) return '';
    return obj[this.lang] || obj['en'] || '';
  }

  ngOnDestroy(): void {
    if (this.langSub) this.langSub.unsubscribe();
  }
}
