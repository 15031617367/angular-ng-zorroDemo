import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchRadarComponent } from './ech-radar.component';

describe('EchRadarComponent', () => {
  let component: EchRadarComponent;
  let fixture: ComponentFixture<EchRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
