import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root', // This should match the tag in your main index.html
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BreadcrumbsComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-breadcrumbs></app-breadcrumbs>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css'],
})
export class App {}
