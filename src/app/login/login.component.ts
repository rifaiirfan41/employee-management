import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    const validUsername = 'admin';
    const validPassword = '12345678';
    if (!this.username || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Fields',
        text: 'Username dan password tidak boleh kosong.',
      });
      return;
    }
    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/employee-list']);
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: 'Sukses.',
      });
      this.loginFailed= false;

    } else {
      this.loginFailed = true;
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Periksa kembali username dan password anda.',
      });
    }
  }
}
