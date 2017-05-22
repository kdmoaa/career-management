import { Component } from '@angular/core';

import { User } from './user';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	constructor(
		public router: Router,
		public loginService: LoginService 
	){ }

	login(userForm: NgForm) {
		console.log(userForm.value.userId);
		if(this.loginService.login(userForm.value.userId, userForm.value.password)){
			let redirect = '/admin';
			return this.router.navigate([redirect]);
		}
		return this.router.navigate(['/login']);
	}
}
