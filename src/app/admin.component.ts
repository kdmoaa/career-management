import { Component } from '@angular/core';

import { User } from './user';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.css' ]
})
export class AdminComponent {
	model = new User('adminUser', 'adminPassword');
}
