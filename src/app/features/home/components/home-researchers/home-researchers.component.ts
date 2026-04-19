import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-researchers',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `<section class="home-section">
    <h2>{{ 'HOME.RESEARCHERS.TITLE' | translate }}</h2>
    <p>{{ 'HOME.RESEARCHERS.DESCRIPTION' | translate }}</p>
  </section>`,
  styleUrls: ['./home-researchers.component.css'],
})
export class HomeResearchersComponent {}
