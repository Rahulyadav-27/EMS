import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEditEmployeeComponent } from './register-edit-employee.component';

describe('RegisterEditEmployeeComponent', () => {
  let component: RegisterEditEmployeeComponent;
  let fixture: ComponentFixture<RegisterEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEditEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
