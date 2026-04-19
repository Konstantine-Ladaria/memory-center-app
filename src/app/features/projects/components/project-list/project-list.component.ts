import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project } from '../../../../core/models/project.model';
import { ProjectService } from '../../services/project-service';

// Type alias to match our filter tabs
type FilterType = 'all' | 'ongoing' | 'completed';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  // Store all projects fetched from the service
  allProjects: Project[] = [];

  // Store the projects currently being displayed based on the active tab
  filteredProjects: Project[] = [];

  // Track which tab is currently active
  activeFilter: FilterType = 'all';

  private translate = inject(TranslateService);
  private projectService = inject(ProjectService);

  ngOnInit(): void {
    // Fetch the projects when the component loads
    this.loadProjects();
  }

  // Safely get the current language for the UI bindings
  get currentLang(): string {
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'ka';
  }

  // Helper to safely extract the localized string without template errors
  getLocalized(obj: any): string {
    if (!obj) return '';
    return obj[this.currentLang] || obj['en'] || '';
  }

  // Load data from your service
  private loadProjects(): void {
    // Assuming your service returns an Observable.
    // If it returns a direct array, you can just do: this.allProjects = this.projectService.getProjects();
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        // Sort projects by start date (newest first)
        this.allProjects = projects.sort((a, b) => {
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        });

        // Apply the initial filter to populate the view
        this.applyFilter();
      },
      error: (err) => console.error('Error loading projects:', err),
    });
  }

  // Triggered when a user clicks a tab in the HTML
  setFilter(filter: FilterType): void {
    this.activeFilter = filter;
    this.applyFilter();
  }

  // Core filtering logic
  private applyFilter(): void {
    if (this.activeFilter === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter(
        (project) => project.status === this.activeFilter,
      );
    }
  }
}
