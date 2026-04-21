import { Injectable, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements OnDestroy {
  private langChangeSub!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
  ) {}

  /**
   * Initializes the translation engine and attaches the HTML listener.
   * Call this ONCE when the application starts.
   */
  initLanguage(): void {
    // 1. Establish your fallback language
    const defaultLang = 'ka';
    this.translate.setDefaultLang(defaultLang);

    // 2. Determine initial language (checking browser preferences against your supported languages)
    const browserLang = this.translate.getBrowserLang();
    const startingLang =
      browserLang && browserLang.match(/en|ka|ru|az|hy/) ? browserLang : defaultLang;
    this.translate.use(startingLang);

    // 3. Set the root HTML attribute for the very first time
    this.updateHtmlLangAttribute(startingLang);

    // 4. Subscribe to user-triggered changes from your dropdown menu
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateHtmlLangAttribute(event.lang);
    });
  }

  /**
   * Safely manipulates the DOM to update <html lang="x">
   */
  private updateHtmlLangAttribute(lang: string): void {
    // The if-check ensures this doesn't crash if running in a non-browser environment
    if (this.document && this.document.documentElement) {
      this.document.documentElement.lang = lang;
    }
  }

  ngOnDestroy(): void {
    // Always clean up subscriptions to prevent memory leaks
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
