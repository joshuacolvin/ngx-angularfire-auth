import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NgxAngularfireAuthService } from './ngx-angularfire-auth.service';

@Injectable()
export class NgxAngularfireAuthGuard implements CanActivate {
  constructor(
    private auth: NgxAngularfireAuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return of(this.auth.afAuth).pipe(
      take(1),
      map(authState => !!authState),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['login']);
        } else {
          return of(authenticated);
        }
      }),
    );
  }
}
