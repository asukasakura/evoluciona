import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapCardsComponent } from './wrap-cards.component';

describe('WrapCardsComponent', () => {
  let component: WrapCardsComponent;
  let fixture: ComponentFixture<WrapCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
