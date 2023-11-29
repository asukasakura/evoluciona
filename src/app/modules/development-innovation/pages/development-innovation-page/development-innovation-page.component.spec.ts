import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentInnovationPageComponent } from './development-innovation-page.component';

describe('DevelopmentInnovationPageComponent', () => {
  let component: DevelopmentInnovationPageComponent;
  let fixture: ComponentFixture<DevelopmentInnovationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentInnovationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentInnovationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
