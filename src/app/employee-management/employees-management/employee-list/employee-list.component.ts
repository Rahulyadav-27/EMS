import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material-module/material-module.module';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/employee-list.interface';
import { EmployeesManagementService } from '../services/employees-management.service';
import { map, max, min, Subject, takeUntil } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [MaterialModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  
  employeesData!: Employee[];
  destroy$ = new Subject<void>();
  columns = [
    { key: 'name', label: 'Name' , width: '60px', align: 'center' },
    { key: 'projectId', label: 'Project ID' , width: '60px', align: 'center' },
    { key: 'projectName', label: 'Project Name' , width: '60px', align: 'center' },
    { key: 'projectDescription', label: 'Project Description' , width: '60px', align: 'center' },
    { key: 'age', label: 'Age', width: '20px', align: 'center', textOverflow: 'wrap' },
    { key: 'unit', label: 'Unit' , width: '60px', align: 'center' },
    { key: 'email', label: 'Email' , width: '60px', align: 'center' },
    { key: 'details', label: 'Details', width: '40px', align: 'center', type: 'link', action: 'details' }
  ];

  displayedColumns: string[] = this.columns.map(column => column.key);
  dataSource = new MatTableDataSource<Employee>([]);
  employeeId!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeesService: EmployeesManagementService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeesService.getEmployees().pipe(
      takeUntil(this.destroy$),
      map((employees: Employee[]) => {
        // Optionally, you can transform the data here if needed
        return employees.map(employee => ({
          ...employee,
          age: employee.age.trim() || 'N/A', // Handle missing age
          unit: employee.unit || 'N/A'  // Handle missing unit
        }));
      })
    )
    .subscribe({
      next: (employees: Employee[]) => {
        if (employees.length === 0) {
          this.dataSource.data = [];
        } else {
          this.dataSource.data = employees;
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Failed to load employees', err);
        this.dataSource.data = [];
      }
    });
  }

  registerEmployee(): void {
    this.router.navigate(['employees/register']);

  }

  viewDetails(employee: Employee): void {
    this.router.navigate(['employees/details', employee.id]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
