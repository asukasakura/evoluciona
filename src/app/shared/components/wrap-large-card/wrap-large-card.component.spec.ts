import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapLargeCardComponent } from './wrap-large-card.component';

describe('WrapLargeCardComponent', () => {
  let component: WrapLargeCardComponent;
  let fixture: ComponentFixture<WrapLargeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapLargeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapLargeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
