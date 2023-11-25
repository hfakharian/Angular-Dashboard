import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThatSideTogglerComponent } from './bar-that-side-toggler.component';

describe('BarThatSideTogglerComponent', () => {
  let component: BarThatSideTogglerComponent;
  let fixture: ComponentFixture<BarThatSideTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarThatSideTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThatSideTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
