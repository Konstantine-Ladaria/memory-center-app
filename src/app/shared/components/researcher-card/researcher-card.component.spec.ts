import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherCardComponent } from './researcher-card.component';

describe('ResearcherCardComponent', () => {
  let component: ResearcherCardComponent;
  let fixture: ComponentFixture<ResearcherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearcherCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearcherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
