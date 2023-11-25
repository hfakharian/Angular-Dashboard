import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfUploaderComponent } from './hf-uploader.component';

describe('HfUploaderComponent', () => {
  let component: HfUploaderComponent;
  let fixture: ComponentFixture<HfUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HfUploaderComponent]
    });
    fixture = TestBed.createComponent(HfUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
