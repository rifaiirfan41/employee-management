import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'detail-employee/:id', component: DetailEmployeeComponent },
];

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'employee-list', component: EmployeeListComponent },
//   { path: 'add-employee', component: AddEmployeeComponent },
//   { path: 'detail-employee/:id', component: DetailEmployeeComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}


// export const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'employee-list', component: EmployeeListComponent },
//   { path: 'add-employee', component: AddEmployeeComponent },
//   { path: 'detail-employee/:id', component: DetailEmployeeComponent },
// ];
