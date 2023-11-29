import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingGlobalPageComponent } from './sourcing-global-page.component';

describe('SourcingGlobalPageComponent', () => {
  let component: SourcingGlobalPageComponent;
  let fixture: ComponentFixture<SourcingGlobalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingGlobalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingGlobalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
