import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorPageComponent } from './zor-page.component';

describe('ZorPageComponent', () => {
  let component: ZorPageComponent;
  let fixture: ComponentFixture<ZorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
