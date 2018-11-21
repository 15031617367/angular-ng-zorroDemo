import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorInputComponent } from './zor-input.component';

describe('ZorInputComponent', () => {
  let component: ZorInputComponent;
  let fixture: ComponentFixture<ZorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
