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
import { MatSort } from '@angular/material/sort';

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
    MatSort,
    ReactiveFormsModule
  ]
})
export class EmployeeListComponent implements OnInit {

  // dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id','nik','name','position','salary'];
  dataSource = new MatTableDataSource<Employee>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchFormControl = new FormControl();
  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  currentPage: number = 1;

  ngOnInit(): void {
    // Get the employee data from the service
    const employees = this.employeeService.getEmployees();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(employees);

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // this.searchFormControl.valueChanges
    //   .subscribe(searchStr => {
    //     this.dataSource.filter = searchStr.trim().toLowerCase();

    //     if (this.dataSource.paginator) {
    //       this.dataSource.paginator.firstPage();
    //     }
    //   });
  }
  ngAfterViewInit() {
    // Set the sort and paginator for the table
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
    this.dataSource.data = this.employees;
  }
  applyFilter(event: Event) {
    // Get the filter value from the input
    const filterValue = (event.target as HTMLInputElement).value;

    // Apply the filter to the data source
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  addEmployee(row: Employee): void {
    Swal.fire({
      icon: 'info',
      title: 'Add Employee',
      text: 'Implement your logic for adding a new employee here.',
      confirmButtonText: 'OK',
    });
  }
  editEmployee(row: Employee): void {
    Swal.fire({
      icon: 'warning',
      title: 'Edit Employee',
      text: 'Implement your logic for editing employee details here.',
      confirmButtonText: 'OK',
    });
  }

    deleteEmployee(row: Employee): void {
    Swal.fire({
      icon: 'error',
      title: 'Delete Employee',
      text: 'Implement your logic for deleting an employee here.',
      confirmButtonText: 'OK',
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
