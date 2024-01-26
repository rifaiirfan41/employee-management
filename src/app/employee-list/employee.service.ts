import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
      { id: 1, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 2, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 3, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 4, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 5, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 6, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 7, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 8, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 9, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 10, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 11, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 12, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 12, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 13, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 14, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 15, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },
      { id: 16, nik: 332312312311, name: 'Irfan Rifai', position: 'Software Engineer', salary: 80000 },
      { id: 17, nik: 332312312311, name: 'Aziz', position: 'Product Manager', salary: 100000 },

    ];

    getEmployees(): Employee[] {
      return this.employees;
    }

    addEmployee(newEmployee: Employee): void {
      this.employees.push(newEmployee);
    }
  }

  export interface Employee {
    id: number;
    nik: number;
    name: string;
    position: string;
    salary: number;
  }
