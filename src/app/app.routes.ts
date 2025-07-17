import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
    },
    {
        path: 'employees',
        loadChildren: () => import('./employee-management/employees-management/employees-management.module').then(m => m.EmployeesManagementModule)
    }
];
