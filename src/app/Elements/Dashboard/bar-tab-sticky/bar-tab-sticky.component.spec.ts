import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTabStickyComponent } from './bar-tab-sticky.component';

describe('BarTabStickyComponent', () => {
  let component: BarTabStickyComponent;
  let fixture: ComponentFixture<BarTabStickyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarTabStickyComponent]
    });
    fixture = TestBed.createComponent(BarTabStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
