import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageSwitcherComponent } from '../lang.switch/language-switcher.component';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { Observable, map } from 'rxjs';
import { OrganizationService } from '../../../features/organizations/services/organization.service';
import { Organization } from '../../../core/models/organization.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    LanguageSwitcherComponent,
    HamburgerMenuComponent,
  ],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLangMenuOpen = false;
  currentLang: string = 'ka';
  private langChangeSub!: Subscription;
  parentOrg$!: Observable<Organization | undefined>;
  isHidden = false;
  isAtTop = true; // New variable to track if we are at the very top
  private lastScrollTop = 0;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    public translate: TranslateService,
    private organizationService: OrganizationService,
  ) {}

  ngOnInit(): void {
    this.parentOrg$ = this.organizationService
      .getOrganizationsByRelation('parent')
      .pipe(map((orgs) => orgs[0]));
    this.currentLang = this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'ka';
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Check if we are at the very top (Assuming upper header is 40px tall)
    this.isAtTop = currentScroll <= 50;

    // 2. Determine if we should hide the lower header
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // Scrolling down & past the top area
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll;
  }
}
