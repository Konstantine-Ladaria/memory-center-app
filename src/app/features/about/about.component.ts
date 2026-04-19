import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INSTITUTION_CONFIG } from '../../core/config/institution.config';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // Expose the config object to the HTML template
  institutionConfig = INSTITUTION_CONFIG;
}
