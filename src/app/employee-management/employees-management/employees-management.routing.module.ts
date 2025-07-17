import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { RouterModule, Routes } from "@angular/router";
import { RegisterEditEmployeeComponent } from "./register-edit-employee/register-edit-employee.component";

export const employeesManagementRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EmployeeListComponent },
    { path: 'register', component: RegisterEditEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(employeesManagementRoutes)],
    exports: [RouterModule]
})
export class EmployeesManagementRoutingModule { }