import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationOperationalExcellenceComponent } from './transformation-operational-excellence.component';

describe('TransformationOperationalExcellenceComponent', () => {
  let component: TransformationOperationalExcellenceComponent;
  let fixture: ComponentFixture<TransformationOperationalExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationOperationalExcellenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationOperationalExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
