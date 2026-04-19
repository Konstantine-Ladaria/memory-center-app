import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; // <-- 1. Import 'delay'
import { Project } from '../../../core/models/project.model';
import { mockProjects } from './mock.projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = mockProjects;

  constructor() {}

  getProjects(): Observable<Project[]> {
    // 2. Add .pipe(delay(800)) to simulate an 800ms network request
    return of(this.projects).pipe(delay(800));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projects.find((p) => p.id === id);
    // 3. Add the delay here too!
    return of(project).pipe(delay(800));
  }
}
