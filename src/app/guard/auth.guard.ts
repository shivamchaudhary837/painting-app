import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log("Can activate ",)
    if(this.authService.checkForGuard('shivam','12345')){
      return true;
     }
     else{
        this.router.navigate(['*']);
        return false;
     }
  }
}
