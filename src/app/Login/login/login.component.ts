import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent {
	form: FormGroup;

	readonly API_URL = 'http://localhost:5095';
	bearer: string = "";

	constructor(
		private fb: FormBuilder, private http: HttpClient
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	signIn() {
		this.http.post(this.API_URL + '/security/createToken', { userName: "joydip", password: "joydip123" })
			.subscribe(
				(res: any) => {
					console.log(res);
					if (res['token']) {
						this.bearer = res['token'];
						localStorage.setItem('token', res['token']); //token here is stored in a local storage
					}
				},
				(err: Error) => {
					console.log(err);
				}
			);
	}

	getPath() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.bearer}`,
		});

		return this.http.get(this.API_URL + '/security/connect', { headers: headers }).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
