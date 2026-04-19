import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageSwitcherComponent } from '../lang.switch/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLangMenuOpen = false;
  currentLang: string = 'ka';
  private langChangeSub!: Subscription;

  constructor(
    public themeService: ThemeService,
    private router: Router,
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
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
}
