import { Routes } from '@angular/router';
import { LanguageWrapperComponent } from './core/components/language-wrapper/language-wrapper.component';
import { languageGuard } from './core/guards/language-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'en', // Redirect root to default language
    pathMatch: 'full',
  },
  {
    path: ':lang', // Capture the language code
    component: LanguageWrapperComponent,
    canActivate: [languageGuard],
    children: [
      // 1. Home Route (Lazy loaded)
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      // OR, if you didn't want it lazy-loaded, you would use this instead of the one above:
      // {
      //   path: '',
      //   loadComponent: () => import('./features/home/components/main-page/main-page.component').then((m) => m.MainPageComponent),
      // },

      // 2. Researchers Route
      {
        path: 'researchers',
        loadChildren: () =>
          import('./features/researchers/researchers.routes').then((m) => m.RESEARCHERS_ROUTES),
      },

      // 3. About Route (Removed the duplicate)
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
      },

      // 4. Projects Route
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/components/project-list/project-list.component').then(
            (m) => m.ProjectListComponent,
          ),
      },

      // Project Detail Route
      {
        path: 'projects/:id',
        loadComponent: () =>
          import('./features/projects/components/project-detail/project-detail.component').then(
            (m) => m.ProjectDetailComponent,
          ),
      },

      // 5. Fallback route inside the language context
      { path: '**', redirectTo: '' },
    ],
  },
];
