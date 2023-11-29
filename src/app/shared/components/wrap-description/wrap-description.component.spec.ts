import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDescriptionComponent } from './wrap-description.component';

describe('WrapDescriptionComponent', () => {
  let component: WrapDescriptionComponent;
  let fixture: ComponentFixture<WrapDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
