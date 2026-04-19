import { Routes } from '@angular/router';
import { ResearcherListComponent } from './components/researcher-list/researcher-list.component';

export const RESEARCHERS_ROUTES: Routes = [
  {
    path: '',
    component: ResearcherListComponent,
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/researcher-detail/researcher-detail.component').then(
        (m) => m.ResearcherDetailComponent,
      ),
  },
];
