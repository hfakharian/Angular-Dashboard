import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMapPathComponent } from './bar-map-path.component';

describe('BarMapPathComponent', () => {
  let component: BarMapPathComponent;
  let fixture: ComponentFixture<BarMapPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarMapPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMapPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
