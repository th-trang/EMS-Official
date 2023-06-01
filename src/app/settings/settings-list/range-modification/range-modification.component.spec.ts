import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeModificationComponent } from './range-modification.component';

describe('RangeModificationComponent', () => {
  let component: RangeModificationComponent;
  let fixture: ComponentFixture<RangeModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeModificationComponent]
    });
    fixture = TestBed.createComponent(RangeModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
