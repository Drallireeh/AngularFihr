import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
	declarations: [
		LoginComponent,
	],
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
})
export class LoginModule { }
