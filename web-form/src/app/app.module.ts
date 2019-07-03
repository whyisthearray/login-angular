import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserviewComponent } from './userview/userview.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RegisterviewComponent } from './registerview/registerview.component';

@NgModule({
  declarations: [
    AppComponent,
    UserviewComponent,
    LoginviewComponent,
    RegisterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
