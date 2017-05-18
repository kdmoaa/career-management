import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  declarations: [
	AppComponent,
	LoginComponent,
	AdminComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
