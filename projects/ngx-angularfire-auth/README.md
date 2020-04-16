# NgxAngularfireAuth

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.13.

## Install

```bash
npm install ngx-angularfire-auth
```

## Usage

Provide the service:

```typescript
import { NgxAngularFireAuthService } from 'ngx-angularfire-auth';

@NgModule({
  providers: [NgxAngularFireAuthService],
})
export class AppModule {}
```

Use the service in a component:

```typescript
import { Component } from '@angular/core';
import { NgxAngularFireAuthService } from 'ngx-angularfire-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: NgxAngularFireAuthService) {}

  signIn(email: string, password: string) {
    this.authService
      .signInWithEmailAndPassword(email, password)
      .subscribe(() => {
        // do something
      });
  }
}
```
