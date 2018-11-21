import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoinComponent } from './logoin.component';

describe('LogoinComponent', () => {
  let component: LogoinComponent;
  let fixture: ComponentFixture<LogoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
