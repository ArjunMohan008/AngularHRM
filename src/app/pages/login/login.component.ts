import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8)])],
    remember: [false]
  });

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/dashboard');

      console.table(this.loginForm.value);

      this.loginForm.reset();
    }
  }

  get loginFormFormControl() {
    return this.loginForm.controls;
  }

  goToSignup() {
    this.router.navigateByUrl('/register');
  }

  goToForgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }

}
