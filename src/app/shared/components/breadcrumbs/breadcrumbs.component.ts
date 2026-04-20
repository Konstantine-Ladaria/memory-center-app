import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  // Define your supported languages so the breadcrumb doesn't treat 'ka' or 'en' as a page
  private languageCodes = ['en', 'ka', 'ru', 'az', 'hy'];

  ngOnInit() {
    // Generate breadcrumbs on initial load
    this.buildBreadcrumbs(this.router.url);

    // Update breadcrumbs every time the user navigates to a new page
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event: NavigationEnd) => {
        this.buildBreadcrumbs(event.urlAfterRedirects);
      });
  }

  private buildBreadcrumbs(url: string) {
    // Clean the URL of any search parameters (like ?id=123)
    const path = url.split('?')[0].split('#')[0];
    const segments = path.split('/').filter((segment) => segment !== '');

    // Always start with the Home link
    const crumbs: Breadcrumb[] = [{ label: 'BREADCRUMBS.HEADER.NAV.HOME', url: '/' }];
    let currentUrl = '';

    for (const segment of segments) {
      // Skip the language prefix in the UI trail
      if (this.languageCodes.includes(segment)) {
        currentUrl += `/${segment}`;
        continue;
      }

      currentUrl += `/${segment}`;

      // We assume your translation keys match the URL segments (e.g., url 'researchers' = key 'RESEARCHERS.TITLE')
      // You can add a switch statement here if your URLs and translation keys are very different
      const translationKey = segment.toUpperCase();

      crumbs.push({
        label: `BREADCRUMBS.${translationKey}`,
        url: currentUrl,
      });
    }

    this.breadcrumbs = crumbs;
  }
}
