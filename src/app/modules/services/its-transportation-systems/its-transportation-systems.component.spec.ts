import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsTransportationSystemsComponent } from './its-transportation-systems.component';

describe('ItsTransportationSystemsComponent', () => {
  let component: ItsTransportationSystemsComponent;
  let fixture: ComponentFixture<ItsTransportationSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsTransportationSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsTransportationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
