import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationRequestComponent } from './components/registration-request/registration-request.component';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationRequestService} from './services/registration-request.service';
import {BanUserService} from './services/ban-user.service';
import {FormsModule} from '@angular/forms';
import { ManageAttributeComponent } from './components/manage-attribute/manage-attribute.component';
import { CreateAttributeComponent } from './components/create-attribute/create-attribute.component';
import { ManageStructureComponent } from './components/manage-structure/manage-structure.component';
import { DetailStructureComponent } from './components/detail-structure/detail-structure.component';
import { PostVisibilityComponent } from './components/post-visibility/post-visibility.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationRequestComponent,
    BanUserComponent,
    ManageAttributeComponent,
    CreateAttributeComponent,
    ManageStructureComponent,
    DetailStructureComponent,
    PostVisibilityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistrationRequestService, BanUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
