import { Component } from '@angular/core';
import { UserProfile } from '../models/user';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  public email = '';
  public password = '';
  constructor(public route: Router) {}
  users: UserProfile[] = [];

  ngOnInit() {
    if (localStorage['admins']) {
      this.users = JSON.parse(localStorage['admins']);
      console.log(this.users);
    } else {
      console.log('No user data found');
    }
  }
  onLogin(): void {
    const userData = localStorage['admins']
      ? JSON.parse(localStorage['admins'])
      : [];
    console.log(userData);
    if (!this.email || !this.password) {
      alert('Please enter all fields');
    } else {
      let currentUser = this.users.find(
        (admin, index) =>
          this.email == admin.email && this.password == admin.password
      );
      if (currentUser != undefined) {
        // save logged in user to local storage
        localStorage.setItem('LoggedUser', JSON.stringify(currentUser));
        localStorage.setItem('isLoggedInAdmin', 'true');
        alert('Admin LoggedIn SuccessFully');
        this.route.navigate(['dashboard']);
      } else {
        alert('Invalid Email or Password! Please try again.');
      }
    }
  }
}
