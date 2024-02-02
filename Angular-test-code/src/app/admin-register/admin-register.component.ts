import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../models/user';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css',
})
export class AdminRegisterComponent {
  constructor(public route: Router) {}
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  gender = '';
  address = '';
  password = '';

  users: UserProfile[] = [];
  ngOnInit() {
    if (localStorage['admins']) {
      this.users = JSON.parse(localStorage['admins']);
    }
  }
  onSubmit(): void {
    const user = {
      id: this.users.length + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address,
      password: this.password,
    };
    this.users = [...this.users, user];
    localStorage.setItem('admins', JSON.stringify(this.users));
    // this.route.navigate(['displayUser']);
  }
}
