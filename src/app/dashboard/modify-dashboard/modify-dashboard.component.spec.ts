import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDashboardComponent } from './modify-dashboard.component';

describe('ModifyDashboardComponent', () => {
  let component: ModifyDashboardComponent;
  let fixture: ComponentFixture<ModifyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyDashboardComponent]
    });
    fixture = TestBed.createComponent(ModifyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
