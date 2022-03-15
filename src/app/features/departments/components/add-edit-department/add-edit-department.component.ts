import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {
  isEditing: boolean = false;

  departmentForm = this.fb.group({
    name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    description: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8)])],
    manager: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8)])],
  });

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.departmentForm.valid) {
      console.table(this.departmentForm.value);

      this.departmentForm.reset();
    }
  }

  get departmentFormFormControl() {
    return this.departmentForm.controls;
  }

  goToDepartmentList() {
    this.router.navigateByUrl('/departments');
  }

  onReset() {
    this.departmentForm.reset();
  }

  onCancel() {
    console.log('Cancelled');
  }

}
