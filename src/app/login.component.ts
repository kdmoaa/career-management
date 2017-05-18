import { Component } from '@angular/core';

import { User } from './user';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	constructor(public router: Router){
	}

	model = new User('user', 'password');

	login() {
		let redirect = '/admin';

		this.router.navigate([redirect]);
	}
}
