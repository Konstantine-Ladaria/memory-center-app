import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'],
})
export class HomeHeroComponent implements OnInit, OnDestroy {
  currentLang: string = 'ka';
  private langChangeSub!: Subscription;
  constructor(public translate: TranslateService) {}

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
