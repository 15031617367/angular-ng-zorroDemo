import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorTableComponent } from './zor-table.component';

describe('ZorTableComponent', () => {
  let component: ZorTableComponent;
  let fixture: ComponentFixture<ZorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
