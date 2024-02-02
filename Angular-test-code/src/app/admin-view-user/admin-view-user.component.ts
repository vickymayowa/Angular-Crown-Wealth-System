import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-view-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-view-user.component.html',
  styleUrl: './admin-view-user.component.css',
})
export class AdminViewUserComponent {
  users: UserProfile[] = [];
  user: UserProfile = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    password: '',
  };

  userId: number = 0;
  userProfile: any;
  firstName: any;
  lastName: any;
  phone: any;
  gender: any;
  address: any;
  email: any;
  password: any;

  constructor(public activated: ActivatedRoute, public route: Router) {}

  ngOnInit() {
    if (localStorage['Students']) {
      this.users = JSON.parse(localStorage['Students']);
      this.activated.params.subscribe((params) => {
        this.userId = +params['id']; // Assuming the route parameter is named 'id'
        this.user =
          this.users.find((user) => user.id === this.userId) || this.user;
      });
    } else {
      console.log('No user data found');
      this.users = [];
    }
  }
  deleteUser() {
    this.users = this.users.filter((user) => user.id !== this.userId);
    localStorage.setItem('Students', JSON.stringify(this.users));
    this.route.navigate(['dashboard']);
  }
  editProfile(): void {
    // Call the service to update the user profile
    // this.UserProfileService.updateUserProfile(this.userProfile);
    const userIdx = Number(
      this.users.findIndex((user) => user.id == this.userId)
    );
    const user = {
      id: this.user.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address,
      password: this.password,
    };
    this.users.splice(userIdx, 1, user);
    localStorage.setItem('Students', JSON.stringify(this.users));
    this.route.navigate(['displayUser']);
  }
}
