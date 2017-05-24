import { NgModule }		from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './employee.component';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full' },
	{path: 'login', component: LoginComponent },
	{path: 'admin', component: AdminComponent },
	{path: 'employees', component: EmployeeComponent },
	{path: 'accounts', component: AccountsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes) ],
	exports: [RouterModule ]
})
export class AppRoutingModule {}
