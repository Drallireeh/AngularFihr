import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder, 
   // private authService: AuthService, 
   // private router: Router
   ) {

  this.form = this.fb.group({
  email: ['',Validators.required],
  password: ['',Validators.required]
});
}
login() {
  const val = this.form.value;

  /*if (val.email && val.password) {
      this.authService.login(val.email, val.password)
          .subscribe(
              () => {
                  console.log("User is logged in");
                  this.router.navigateByUrl('/');
              }
          );
  }*/
}
}
