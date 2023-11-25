import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarColorThemeComponent } from './bar-color-theme.component';

describe('BarColorThemeComponent', () => {
  let component: BarColorThemeComponent;
  let fixture: ComponentFixture<BarColorThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarColorThemeComponent]
    });
    fixture = TestBed.createComponent(BarColorThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
