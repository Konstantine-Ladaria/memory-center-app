// src/app/core/components/language-wrapper/language-wrapper.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`, // Simply renders the child routes
})
export class LanguageWrapperComponent implements OnInit {
  // Define allowed languages to prevent invalid URL states
  private allowedLangs = ['en', 'ru', 'ka', 'hy', 'az'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const lang = params.get('lang');

      if (lang && this.allowedLangs.includes(lang)) {
        this.translate.use(lang);
      } else {
        // If an invalid language code is in the URL, redirect to English
        this.router.navigate(['/en']);
      }
    });
  }
}
