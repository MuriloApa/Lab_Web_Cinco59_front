import { Injectable, booleanAttribute } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../models/user.model';
import { Role } from '../shared/enums/roles.enum';
import { MensagensService } from '../shared/mensagens.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private route: ActivatedRoute,
    private readonly messages: MensagensService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkAuth(route);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkAuth(childRoute);
  }

  checkAuth(route: ActivatedRouteSnapshot): boolean {
    const { Roles } = route.data;
    const userRoles = this.authenticationService.getUserRoles();
    const acesso: boolean = Roles.some((role: Role) => {
      return userRoles?.includes(role);
    });

    if (acesso) {
      return true;
    }
    this.messages.error('Acesso não autorizado');
    this.router.navigate(['']);
    return false;
  }
}
