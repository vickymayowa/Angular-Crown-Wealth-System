import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminDashboardGuard } from './guards/admin-dashboard.guard';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'adminRegister', component: AdminRegisterComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'viewUser/:id', component: AdminViewUserComponent },

  {
    path: 'dashboard',
    children: [{ path: '', component: AdminDashboardComponent }],
    canActivate: [adminDashboardGuard],
  },
];
