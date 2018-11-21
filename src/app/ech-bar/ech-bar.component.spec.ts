import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchBarComponent } from './ech-bar.component';

describe('EchBarComponent', () => {
  let component: EchBarComponent;
  let fixture: ComponentFixture<EchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
