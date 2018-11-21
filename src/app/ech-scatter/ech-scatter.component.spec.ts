import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchScatterComponent } from './ech-scatter.component';

describe('EchScatterComponent', () => {
  let component: EchScatterComponent;
  let fixture: ComponentFixture<EchScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
