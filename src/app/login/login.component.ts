import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'password';

    // Check if the entered credentials are valid
    if (this.username === validUsername && this.password === validPassword) {
      // Navigate to the employee-list page on successful login
      this.router.navigate(['/employee-list']);
    } else {
      // Display login failed message
      this.loginFailed = true;
    }
  }
}
