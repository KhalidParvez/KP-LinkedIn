import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.css']
})
export class StudentListingComponent implements OnInit {
@Input() students : Array<Student>;
@Output() editStudent : EventEmitter<Student>;
@Output() deleteStudent : EventEmitter<Student>;
delayTime = 1000;
  constructor() { 
    this.students = new  Array<Student>();
    this.editStudent = new EventEmitter<Student>();
    this.deleteStudent = new EventEmitter<Student>();
  }

  ngOnInit(): void {
  }
  EditStudent(student: Student):void{
    
      this.editStudent.emit(student);
  }
  DeleteStudent(student: Student):void{
    this.deleteStudent.emit(student);
  }
}
