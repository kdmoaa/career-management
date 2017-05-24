import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './employee.component';
import { AccountsComponent } from './accounts.component';
import { CommonComponent } from './common.component';
import { LoginService } from './login.service';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  declarations: [
	AppComponent,
	LoginComponent,
	AdminComponent,
	EmployeeComponent,
	AccountsComponent,
	CommonComponent
  ],
  providers: [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
