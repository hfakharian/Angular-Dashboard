import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavProfileComponent } from './bar-nav-profile.component';

describe('BarNavProfileComponent', () => {
  let component: BarNavProfileComponent;
  let fixture: ComponentFixture<BarNavProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarNavProfileComponent]
    });
    fixture = TestBed.createComponent(BarNavProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
