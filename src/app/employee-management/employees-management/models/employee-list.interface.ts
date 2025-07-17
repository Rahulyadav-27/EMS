export interface Employee {
  id: number;
  name: string;
  projectId: string;
  projectName: string;
  email: string;
  projectDescription: string;
  unit: string;
  age: string;
}
export interface EmployeeList {
  employees: Employee[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
}