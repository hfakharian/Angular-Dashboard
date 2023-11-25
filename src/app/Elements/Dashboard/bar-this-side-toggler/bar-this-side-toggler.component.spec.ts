import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThisSideTogglerComponent } from './bar-this-side-toggler.component';

describe('BarThisSideTogglerComponent', () => {
  let component: BarThisSideTogglerComponent;
  let fixture: ComponentFixture<BarThisSideTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarThisSideTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThisSideTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
