import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationRequestComponent } from './components/registration-request/registration-request.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { BanUserComponent } from './components/ban-user/ban-user.component';
import { PostVisibilityComponent } from './components/post-visibility/post-visibility.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationRequestComponent,
    NavbarComponent,
    BanUserComponent,
    PostVisibilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
