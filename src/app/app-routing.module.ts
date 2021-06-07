import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationRequestComponent} from './components/registration-request/registration-request.component';
import {BanUserComponent} from './components/ban-user/ban-user.component';
import {ManageAttributeComponent} from './components/manage-attribute/manage-attribute.component';
import {CreateAttributeComponent} from './components/create-attribute/create-attribute.component';

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
    path: 'admin/manageAttribute',
    component: ManageAttributeComponent
  },
  {
    path: 'admin/createAttribute',
    component: CreateAttributeComponent
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
