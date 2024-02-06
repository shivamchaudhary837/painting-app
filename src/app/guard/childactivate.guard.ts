import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

export const childactivateGuard: CanActivateChildFn = (childRoute, state) => {
  console.log("can childActivate ")
  return true;
};
