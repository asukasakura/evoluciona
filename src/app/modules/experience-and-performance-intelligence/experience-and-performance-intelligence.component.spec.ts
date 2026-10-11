import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndPerformanceIntelligenceComponent } from './experience-and-performance-intelligence.component';

describe('ExperienceAndPerformanceIntelligenceComponent', () => {
  let component: ExperienceAndPerformanceIntelligenceComponent;
  let fixture: ComponentFixture<ExperienceAndPerformanceIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAndPerformanceIntelligenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAndPerformanceIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
