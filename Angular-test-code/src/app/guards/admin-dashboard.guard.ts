import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminDashboardGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router);
  let user = JSON.parse(localStorage.getItem('isLoggedInAdmin')!);
  if (!user) {
    routes.navigate(['adminLogin']);
    return false;
  }
  return true;
};
