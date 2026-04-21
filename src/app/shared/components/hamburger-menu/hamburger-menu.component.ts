import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent {
  isOpen = false;
  currentLang: string = 'ka';

  constructor(public themeService: ThemeService) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;

    // Optional: Prevent background scrolling when menu is open
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }
}
