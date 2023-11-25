import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMessageComponent } from './bar-message.component';

describe('BarMessageComponent', () => {
  let component: BarMessageComponent;
  let fixture: ComponentFixture<BarMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarMessageComponent]
    });
    fixture = TestBed.createComponent(BarMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
