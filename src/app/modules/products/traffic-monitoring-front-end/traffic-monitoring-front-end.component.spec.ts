import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficMonitoringFrontEndComponent } from './traffic-monitoring-front-end.component';

describe('TrafficMonitoringFrontEndComponent', () => {
  let component: TrafficMonitoringFrontEndComponent;
  let fixture: ComponentFixture<TrafficMonitoringFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficMonitoringFrontEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficMonitoringFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
