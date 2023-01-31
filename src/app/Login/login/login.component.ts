import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent {
	form: FormGroup;

	readonly API_URL = 'http://localhost:3000';

	constructor(
		private fb: FormBuilder, private http: HttpClient
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	signIn() {
		this.http.get(this.API_URL + '/token/sign')
			.subscribe(
				(res: any) => {
					console.log(res);
					if (res['token']) {
						localStorage.setItem('token', res['token']); //token here is stored in a local storage
					}
				},
				(err: Error) => {
					console.log(err);
				}
			);
	}

	getPath() {
		this.http.get(this.API_URL + '/path1') //path1 is then requested    
			.subscribe(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
	}
}
