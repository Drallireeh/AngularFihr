import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetUserAction } from 'src/app/StateMachine/user.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	readonly API_URL = 'http://localhost:5095';
	bearer: string = "";

	constructor(
		private readonly http: HttpClient, private readonly router: Router, private store: Store
	) {
	}

	ngOnInit() {
		this.form = new FormGroup({
			username: new FormControl(""),
			password: new FormControl("")
		});
	}

	signIn(event: Event) {
		event.preventDefault();
		this.http.post(this.API_URL + '/security/createToken', { userName: this.form.get("username").value, password: this.form.get("password").value })
			.subscribe({
				next: (res: any) => {
					console.log(res);
					if (res['token']) {
						this.store.dispatch(new SetUserAction({
							username: res['username'],
							token: res['token'],
							role: ""
						}));
						this.bearer = res['token'];
						localStorage.setItem('token', res['token']); //token here is stored in a local storage
						// this.router.navigate(["/fhirhub"])
					}
				},
				error: (err: any) => {
					console.log(err);
				},
			})
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
