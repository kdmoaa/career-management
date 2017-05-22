import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class LoginService {

	login(userId: string, password: string): boolean {
		if(userId == "user" && password == "pass") {
			return true;
		}

		return false;
	}
}
