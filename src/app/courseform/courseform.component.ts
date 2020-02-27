import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent {
  courseForm = new FormGroup({
    "courseName" : new FormControl('',[
      Validators.required,
      Validators.minLength(5)

    ]),
    courseDesc:new FormControl(''),
    courseFee:new FormControl(),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })


  });

  onSubmit() {
    console.warn(this.courseForm.value);
  }
  get courseName() { return this.courseForm.get('courseName'); }

  }
 


