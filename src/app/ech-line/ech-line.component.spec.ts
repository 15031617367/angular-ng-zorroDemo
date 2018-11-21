import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchLineComponent } from './ech-line.component';

describe('EchLineComponent', () => {
  let component: EchLineComponent;
  let fixture: ComponentFixture<EchLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
