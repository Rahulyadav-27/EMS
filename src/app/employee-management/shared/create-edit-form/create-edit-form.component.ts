import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesManagementService } from '../../employees-management/services/employees-management.service';

@Component({
  selector: 'app-create-edit-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './create-edit-form.component.html',
  styleUrl: './create-edit-form.component.scss'
})
export class CreateEditFormComponent implements OnInit {

  @Input() isEditMode!: boolean;
  employeeForm!: FormGroup;
  fields = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'projectID', label: 'Project ID', type: 'text' },
    { key: 'projectName', label: 'Project Name', type: 'text' },
    { key: 'projectDescription', label: 'Project Description', type: 'text' },
    { key: 'age', label: 'Age', type: 'number' },
    { key: 'unit', label: 'Unit', type: 'text' },
    { key: 'email', label: 'Email', type: 'email' }
  ];

  constructor(private fb: FormBuilder, private employeeService: EmployeesManagementService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
      this.employeeForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        projectID: ['', [Validators.required]],
        projectName: ['', [Validators.required]],
        projectDescription: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(0)]],
        unit: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
      });
      if (this.isEditMode) {
        this.employeeService
       this.mapDataToForm(); 
      }
  }

  private mapDataToForm(): void {
    // this.employeeForm.patchValue({
    //   name: 
  }

}
