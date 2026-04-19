import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, switchMap } from 'rxjs';

import { ResearcherService } from '../../services/researcher.service';
import { LocalizedString, Researcher } from '../../../../core/models/researcher.model';

@Component({
  selector: 'app-researcher-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './researcher-detail.component.html',
  styleUrls: ['./researcher-detail.component.css'],
})
export class ResearcherDetailComponent implements OnInit {
  researcher$!: Observable<Researcher | undefined>;

  constructor(
    private route: ActivatedRoute,
    private researcherService: ResearcherService,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    // We use switchMap to automatically fetch new data if the URL ID changes
    this.researcher$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id') || '';
        return this.researcherService.getResearcherById(id);
      }),
    );
  }

  get lang(): keyof LocalizedString {
    const current = this.translate.currentLang || this.translate.defaultLang || 'ka';
    return current as keyof LocalizedString;
  }
}
