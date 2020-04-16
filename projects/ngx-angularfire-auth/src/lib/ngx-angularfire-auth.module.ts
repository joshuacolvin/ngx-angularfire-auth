import { NgModule } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [AngularFireAuthModule],
  providers: [AngularFireAuth],
})
export class NgxAngularfireAuthModule {}
