import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationRequestComponent} from './components/registration-request/registration-request.component';
import {BanUserComponent} from './components/ban-user/ban-user.component';
import {PostVisibilityComponent} from "./components/post-visibility/post-visibility.component";
import {ManageAttributeComponent} from "./components/attribute/manage-attribute/manage-attribute.component";
import {CreateAttributeComponent} from "./components/attribute/create-attribute/create-attribute.component";
import {ManageStructureComponent} from "./components/structure/manage-structure/manage-structure.component";
import {CreateStructureComponent} from "./components/structure/create-structure/create-structure.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrationRequest',
    component: RegistrationRequestComponent
  },
  {
    path: 'banUser',
    component: BanUserComponent
  },
  {
    path: 'manageAttribute',
    component: ManageAttributeComponent
  },
  {
    path: 'createAttribute',
    component: CreateAttributeComponent
  },
  {
    path: 'manageStructure',
    component: ManageStructureComponent
  },
  {
    path: 'createStructure',
    component: CreateStructureComponent
  },
  {
    path: 'postVisibility',
    component: PostVisibilityComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
