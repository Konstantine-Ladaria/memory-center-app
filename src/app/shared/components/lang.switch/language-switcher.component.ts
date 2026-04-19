import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SUPPORTED_LANGUAGES } from '../../../core/constants/language.constants';

interface Language {
  code: string;
  label: string;
  shorthand: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Add CommonModule for directives like *ngIf
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent implements OnInit {
  isOpen = false;
  activeLang = 'ka'; // Defaulting to Georgian as the primary language

  availableLanguages: Language[] = SUPPORTED_LANGUAGES;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private eRef: ElementRef,
  ) {}

  ngOnInit(): void {
    // 1. Check Local Storage to remember the user's preference
    const savedLang = localStorage.getItem('preferredLang');

    if (savedLang) {
      this.activeLang = savedLang;
      this.translate.use(savedLang);
    } else {
      // Fallback to ngx-translate's current or default
      this.activeLang = this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'ka';
    }

    // Keep activeLang synced if ngx-translate changes the language from somewhere else
    this.translate.onLangChange.subscribe((event) => {
      this.activeLang = event.lang;
    });
  }

  // A getter to easily find the full object of the currently selected language for the HTML
  get selectedLanguage(): Language | undefined {
    return this.availableLanguages.find((lang) => lang.code === this.activeLang);
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Now it knows exactly which event to stop
    this.isOpen = !this.isOpen;
    console.log('Dropdown toggled! isOpen is now:', this.isOpen);
  }

  switchLanguage(langCode: string, event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    this.translate.use(langCode);
    localStorage.setItem('preferredLang', langCode);

    const currentUrl = this.router.url;
    let newUrl: string;

    const urlSegments = currentUrl.split('/').filter((segment) => segment !== '');
    if (urlSegments.length > 0 && this.availableLanguages.some((l) => l.code === urlSegments[0])) {
      urlSegments[0] = langCode;
      newUrl = '/' + urlSegments.join('/');
    } else {
      newUrl = `/${langCode}${currentUrl}`;
    }

    this.router.navigateByUrl(newUrl, { replaceUrl: true });
    this.isOpen = false;
  }

  // This brilliant little HostListener ensures that if the user clicks
  // anywhere else on the webpage, the dropdown menu neatly closes itself.
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
