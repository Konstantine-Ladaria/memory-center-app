import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
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
export class App implements OnInit {
  // <-- Just changed to AppComponent

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.initLanguage();
  }
}
