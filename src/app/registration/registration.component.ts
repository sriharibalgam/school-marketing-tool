import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Registration } from '../shared/models/registration.class';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  registration = new Registration('', '', '', '', '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Register on Node
  }

  ngOnInit() {
  }

}
