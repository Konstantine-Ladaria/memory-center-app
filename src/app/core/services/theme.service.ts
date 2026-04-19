import { Injectable, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Preferences } from '@capacitor/preferences'; // Using Capacitor to save the choice!

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // We use an Angular Signal to reactively update the UI when the theme changes
  isDarkMode = signal<boolean>(false);

  // Inject the safe Angular DOCUMENT token
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadSavedTheme();
  }

  // 1. Load the theme when the app starts
  private async loadSavedTheme() {
    const { value } = await Preferences.get({ key: 'app-theme' });

    if (value === 'dark') {
      this.isDarkMode.set(true);
      this.document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.isDarkMode.set(false);
      this.document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // 2. The function your toggle button will call
  async toggleTheme() {
    // Flip the signal state (true to false, or false to true)
    this.isDarkMode.update((dark) => !dark);

    const newTheme = this.isDarkMode() ? 'dark' : 'light';

    // Attach the attribute to the <html> tag!
    this.document.documentElement.setAttribute('data-theme', newTheme);

    // Save the new choice to the hard drive
    await Preferences.set({ key: 'app-theme', value: newTheme });
  }
}
