import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThatSideComponent } from './bar-that-side.component';

describe('BarThatSideComponent', () => {
  let component: BarThatSideComponent;
  let fixture: ComponentFixture<BarThatSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarThatSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThatSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
