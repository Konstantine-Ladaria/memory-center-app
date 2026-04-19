import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ResearcherListComponent } from './components/researcher-list/researcher-list.component';
import { ResearcherDetailComponent } from './components/researcher-detail/researcher-detail.component';

// Internal Routes for this feature
const routes: Routes = [
  { path: '', component: ResearcherListComponent }, // URL: /researchers
  { path: ':id', component: ResearcherDetailComponent }, // URL: /researchers/malkhaz-toria
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ResearcherListComponent,
    ResearcherDetailComponent, // Notice it's forChild, not forRoot!
  ],
})
export class ResearchersModule {}
