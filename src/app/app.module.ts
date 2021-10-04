import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationRequestComponent } from './components/registration-request/registration-request.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { PostVisibilityComponent } from './components/post-visibility/post-visibility.component';
import { ManageAttributeComponent } from './components/attribute/manage-attribute/manage-attribute.component';
import { CreateAttributeComponent } from './components/attribute/create-attribute/create-attribute.component';
import { ManageStructureComponent } from './components/structure/manage-structure/manage-structure.component';
import { CreateStructureComponent } from './components/structure/create-structure/create-structure.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationRequestComponent,
    NavbarComponent,
    BanUserComponent,
    PostVisibilityComponent,
    ManageAttributeComponent,
    CreateAttributeComponent,
    ManageStructureComponent,
    CreateStructureComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
