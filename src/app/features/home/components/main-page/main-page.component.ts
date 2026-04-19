import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomePublicationsComponent } from '../home-publications/home-publications.component';
import { HomeResearchersComponent } from '../home-researchers/home-researchers.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, HomeHeroComponent, HomePublicationsComponent, HomeResearchersComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // Logic for the main home page, if any, goes here
}
