import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSignIn: FormGroup;
  formSignUp: FormGroup;
  signUpFormShow: boolean = false;
  signInFormShow: boolean = true;

  constructor(public usersService: UsersService, public fb: FormBuilder) {
    this.formSignIn = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.formSignUp = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSignInSubmit() {
    console.log(this.formSignIn.value);
    // this.usersService.login(this.form.value).subscribe(Response => {
    //   console.log(Response);
    // })
  }
  onSignUpSubmit() {
    console.log(this.formSignUp.value);
    // this.usersService.signUp(this.form.value).subscribe(Response => {
    //   console.log(Response);
    // })
  }
  signInForm() {
    this.signInFormShow = true;
    this.signUpFormShow = false;
  }
  signUpForm() {
    this.signUpFormShow = true;
    this.signInFormShow = false;
  }
}
