import { Component } from '@angular/core';
import { MdMenuModule } from '@angular/material';
import { Router } from '@angular/router';

import { User } from './user';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.css' ]
})
export class AdminComponent {
	constructor(
		public router: Router
	){}

	listEmployee() {
		return this.router.navigate(['/employees']);
	}

	registerAccounts() {
		return this.router.navigate(['/accounts']);
	}
}
