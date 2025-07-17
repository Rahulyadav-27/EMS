import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee-list.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesManagementService {

  constructor(private http: HttpClient) { }

  /**
   * Fetches the list of employees from the backend API.
   * @returns An observable containing an array of Employee objects.
   */
  getEmployees() {
    return this.http.get<Employee[]>('http://localhost:8080/api/employees/list');
  }

  registerEmployee(employee: Employee) {
    return this.http.post<Employee>('http://localhost:8080/api/employees', employee);
  }

  

}
