import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles: string[] = route.data['expectedRoles'];
    const userRole = this.authService.getRoleFromToken(); // Méthode pour obtenir le rôle à partir de AuthService

    if (!userRole || !expectedRoles.includes(userRole)) {
      this.router.navigate(['/login']); // Redirection vers une page non autorisée ou de connexion
      return false;
    }

    return true;
  }
}
