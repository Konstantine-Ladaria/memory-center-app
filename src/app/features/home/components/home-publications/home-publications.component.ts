import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-publications',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `<section class="home-section">
    <h2>{{ 'HOME.PUBLICATIONS.TITLE' | translate }}</h2>
    <p>{{ 'HOME.PUBLICATIONS.DESCRIPTION' | translate }}</p>
  </section>`,
  styleUrls: ['./home-publications.component.css'],
})
export class HomePublicationsComponent {}
