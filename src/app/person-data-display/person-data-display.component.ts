import { Component, Input, OnInit } from '@angular/core';
import { person } from '../models/person';
import { PersonDataEntryComponent } from '../person-data-entry/person-data-entry.component';

@Component({
  selector: 'app-person-data-display',
  templateUrl: './person-data-display.component.html',
  styleUrls: ['./person-data-display.component.css']
})
export class PersonDataDisplayComponent implements OnInit {
  @Input() person : person;

  constructor() { 
    this.person = new person("","0");
  }

  ngOnInit(): void {
  }

}
