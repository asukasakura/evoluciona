import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapHeroComponent } from './wrap-hero.component';

describe('WrapHeroComponent', () => {
  let component: WrapHeroComponent;
  let fixture: ComponentFixture<WrapHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
