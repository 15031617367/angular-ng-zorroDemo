import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorHttpComponent } from './zor-http.component';

describe('ZorHttpComponent', () => {
  let component: ZorHttpComponent;
  let fixture: ComponentFixture<ZorHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
