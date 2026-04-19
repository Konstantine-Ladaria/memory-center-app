import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root', // This should match the tag in your main index.html
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, // Import the standalone HeaderComponent
    FooterComponent, // Import the standalone FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css'],
})
export class App {}
