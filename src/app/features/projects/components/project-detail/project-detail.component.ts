import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// Import your services and models
import { ProjectService } from '../../services/project-service';
import { Project } from '../../../../core/models/project.model';
import { PublicationService } from '../../../publications/services/publication.service';
import { Publication } from '../../../../core/models/publication.model';

// IMPORTANT: Import the CmsCitationPipe we built!
import { cmsCitation } from '../../../../shared/pipes/cms-citation.pipe';
import { ResearcherCardComponent } from '../../../../shared/components/researcher-card/researcher-card.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  // Add the CmsCitationPipe to your imports array!
  imports: [CommonModule, RouterModule, TranslateModule, ResearcherCardComponent, cmsCitation],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  lang: string = 'ka';

  // 1. Create a variable to hold the publications stream
  publications$!: Observable<Publication[]>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    // 2. Inject the Publication Service
    private publicationService: PublicationService,
  ) {}

  ngOnInit(): void {
    // 3. Get the project ID from the URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        // Fetch the project data
        this.projectService.getProjectById(id).subscribe((p) => {
          this.project = p;
        });

        // 4. NEW: Fetch all publications linked to this specific project ID
        this.publications$ = this.publicationService.getPublicationsByProjectId(id);
      }
    });
  }

  getLocalized(obj: any): string {
    if (!obj) return '';
    return obj[this.lang] || obj['en'] || '';
  }
}
