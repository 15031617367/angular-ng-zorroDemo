import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorCalendarComponent } from './zor-calendar.component';

describe('ZorCalendarComponent', () => {
  let component: ZorCalendarComponent;
  let fixture: ComponentFixture<ZorCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
