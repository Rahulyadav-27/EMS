import { Component, ViewChild, ViewChildren } from '@angular/core';
import { CreateEditFormComponent } from '../../shared/create-edit-form/create-edit-form.component';
import { EmployeesManagementService } from '../services/employees-management.service';
import { NotificationService } from '../../../shared/services/notification-service.service';

@Component({
  selector: 'app-register-edit-employee',
  imports: [CreateEditFormComponent],
  templateUrl: './register-edit-employee.component.html',
  styleUrl: './register-edit-employee.component.scss'
})
export class RegisterEditEmployeeComponent {

  isEditMode!: boolean; // This can be set based on the context (e.g., if editing an existing employee)
  @ViewChild(CreateEditFormComponent) createEditFormComponent!: CreateEditFormComponent;

  constructor(private employeeService: EmployeesManagementService, private notificationService: NotificationService) { }

  ngOnInit() : void {
    this.isEditMode = false; // Set to true if editing an existing employee
  }

  isFormValid(): boolean {
    return this.createEditFormComponent?.employeeForm?.valid  && this.createEditFormComponent?.employeeForm?.dirty;
  }
  
  submitForm(): void {
    if (this.isFormValid()) {
      this.employeeService.registerEmployee(this.mapDataToEmployeeForm(this.createEditFormComponent.employeeForm?.value))
        .subscribe({
          next: (response) => {
            this.notificationService.showSuccess('Employee registered successfully!');
            this.createEditFormComponent.employeeForm?.reset();
          }
          , error: (error) => {
            this.notificationService.showError('Failed to register employee: ' + error.message);
          }
        });
    }
  }

  mapDataToEmployeeForm(data: any): any {
    return {
      name: data.name,
      projectID: data.projectId,
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      age: data.age,
      unit: data.unit,
      email: data.email
    };
  }
  cancelForm(): void {
    this.createEditFormComponent.employeeForm.reset();
  }

}
