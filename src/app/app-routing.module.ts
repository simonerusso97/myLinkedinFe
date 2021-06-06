import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationRequestComponent} from './components/registration-request/registration-request.component';
import {BanUserComponent} from './components/ban-user/ban-user.component';

const routes: Routes = [
  {
    path: 'admin/registrationRequest',
    component: RegistrationRequestComponent
  },
  {
    path: 'admin/banUser',
    component: BanUserComponent
  },
  {
    path: '',
    redirectTo: 'admin/registrationRequest',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin/registrationRequest',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
