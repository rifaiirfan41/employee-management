import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from './employee.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatInput } from '@angular/material/input';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInput,
    ReactiveFormsModule
  ]
})
export class EmployeeListComponent implements OnInit {

  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id','nik','name','position','salary'];

  searchFormControl = new FormControl();
  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  currentPage: number = 1;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
    this.dataSource.data = this.employeeService.getEmployees();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  addEmployee(): void {
    Swal.fire({
      icon: 'info',
      title: 'Add Employee',
      text: 'Implement your logic for adding a new employee here.',
      confirmButtonText: 'OK',
    });
  }

  // editEmployee(employee: Employee): void {
    editEmployee(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Edit Employee',
      text: 'Implement your logic for editing employee details here.',
      confirmButtonText: 'OK',
    });

    // Add logic to navigate to the edit page or perform other edit actions
  }

  // deleteEmployee(employee: Employee): void {
    deleteEmployee(): void {
    Swal.fire({
      icon: 'error',
      title: 'Delete Employee',
      text: 'Implement your logic for deleting an employee here.',
      confirmButtonText: 'OK',
    });

    // Add logic to delete the employee or perform other delete actions
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    // Add logic for fetching and displaying data for the selected page
  }
}
