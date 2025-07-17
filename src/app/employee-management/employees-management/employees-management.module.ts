import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { employeesManagementRoutes } from './employees-management.routing.module';
// import { MaterialModule } from 'src/app/material.module'; // Uncomment and update the path if you have a MaterialModule



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(employeesManagementRoutes),
    // , MaterialModule // Uncomment this line if you have imported MaterialModule above
  ],
})
export class EmployeesManagementModule { }
