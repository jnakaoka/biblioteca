import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Test } from 'src/app/model/test';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  test: Test = new Test();
  constructor() { }

  ngOnInit(): void {
  }

  send(form: NgForm){
    console.log(form.value);
  }

}
