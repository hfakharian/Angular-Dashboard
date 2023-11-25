import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarThisSideComponent } from './bar-this-side.component';

describe('BarThisSideComponent', () => {
  let component: BarThisSideComponent;
  let fixture: ComponentFixture<BarThisSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarThisSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarThisSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
