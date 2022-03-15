import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
   firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    lastName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8)])],
    confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8)])],
  });


  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.router.navigateByUrl('/dashboard');

      console.table(this.registerForm.value);

      this.registerForm.reset();
    }
  }

  get registerFormFormControl() {
    return this.registerForm.controls;
  }

  goToSignup() {
    this.router.navigateByUrl('/register');
  }

  goToForgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }

}
