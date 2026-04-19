import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // <-- Required for filtering inside Observables
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ResearcherService } from '../../services/researcher.service';
import { Researcher } from '../../../../core/models/researcher.model';
import { ResearcherCardComponent } from '../../../../shared/components/researcher-card/researcher-card.component';

@Component({
  selector: 'app-researcher-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, ResearcherCardComponent],
  templateUrl: './researcher-list.component.html',
  styleUrls: ['./researcher-list.component.css'],
})
export class ResearcherListComponent implements OnInit {
  // 1. Declare two separate observables for your template to consume
  coreMembers$!: Observable<Researcher[]>;
  collaborators$!: Observable<Researcher[]>;

  constructor(private researcherService: ResearcherService) {}

  ngOnInit(): void {
    // 2. Fetch the master list of researchers once
    const allResearchers$ = this.researcherService.getAllResearchers();

    // 3. Create a stream specifically for core members
    this.coreMembers$ = allResearchers$.pipe(
      map((researchers: Researcher[]) => researchers.filter((r) => r.affiliation === 'member')),
    );

    // 4. Create a stream specifically for collaborators
    this.collaborators$ = allResearchers$.pipe(
      map((researchers: Researcher[]) =>
        researchers.filter((r) => r.affiliation === 'collaborator'),
      ),
    );
  }
}
