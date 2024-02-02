import { Component } from '@angular/core';
import { UserProfile } from '../models/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  users: UserProfile[] = [];
  ngOnInit() {
    if (localStorage['users']) {
      this.users = JSON.parse(localStorage['users']);
      console.log(this.users);
    } else {
      console.log('No user data found');
    }
  }
}
