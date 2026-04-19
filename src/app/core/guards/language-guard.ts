// src/app/core/guards/language.guard.ts

import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SUPPORTED_LANGUAGES } from '../constants/language.constants';

export const languageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);

  // What language is in the URL right now?
  const urlLang = route.paramMap.get('lang');

  // What language did the user last select?
  const savedLang = localStorage.getItem('preferredLang');

  // Check if the URL language is valid (e.g., they didn't type /fr/ by accident)
  const isValidLang = SUPPORTED_LANGUAGES.some((l) => l.code === urlLang);

  // SCENARIO 1: The user has a saved preference, and the URL doesn't match it.
  // (This happens when they click the Back button to an old URL)
  if (savedLang && isValidLang && savedLang !== urlLang) {
    // Rewrite the URL to use their preferred language
    const newUrl = state.url.replace(`/${urlLang}`, `/${savedLang}`);
    return router.parseUrl(newUrl); // Redirect them instantly
  }

  // SCENARIO 2: They typed an invalid language code (like /fr/about)
  if (!isValidLang) {
    // Send them to the default language (or their saved preference)
    const fallback = savedLang || 'ka';
    return router.parseUrl(`/${fallback}`);
  }

  // SCENARIO 3: Everything matches, let them through!
  return true;
};
