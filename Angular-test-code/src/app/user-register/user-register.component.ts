import { Component } from '@angular/core';
import { UserProfile } from '../models/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
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
    if (localStorage['users']) {
      this.users = JSON.parse(localStorage['users']);
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
    console.log(this.users);
    localStorage.setItem('Students', JSON.stringify(this.users));
    alert('Registered SuccessFully.Welcome To Our school');
    this.route.navigate(['/']);
  }
}
