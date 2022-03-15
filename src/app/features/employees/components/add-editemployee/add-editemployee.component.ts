import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-editemployee',
  templateUrl: './add-editemployee.component.html',
  styleUrls: ['./add-editemployee.component.scss']
})
export class AddEditemployeeComponent implements OnInit {
  isEditing: boolean = false;

  employeeForm = this.fb.group({
    firstName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    lastName: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    phone: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    address: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    department: [null, Validators.compose([Validators.required,])],
    jobTitle: [null, Validators.compose([Validators.required,])],
    salary: [null, Validators.compose([Validators.required,])],
    hireDate: [null, Validators.compose([Validators.required,])],
    manager: [null, Validators.compose([Validators.required,])],
    image: [null, Validators.compose([Validators.required,])],
  });

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.router.url.includes('/edit')) {
      this.isEditing = true;
    }

  }

  onSubmit(){
    if (this.employeeForm.valid) {
      console.table(this.employeeForm.value);

      this.employeeForm.reset();
    }
  }

  get employeeFormFormControl() {
    return this.employeeForm.controls;
  }

  goToEmployeeList() {
    this.router.navigateByUrl('/employees');
  }

  onReset() {
    this.employeeForm.reset();
  }

  onCancel() {
    console.log('Cancelled');
  }

}
