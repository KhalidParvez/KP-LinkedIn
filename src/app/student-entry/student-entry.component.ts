import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {
  public student :Student;
  public students : Array<Student>;
  constructor(private studentService : StudentServiceService) { 
    this.student = new Student();
    this.students = new Array<Student>();
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data
    });

    this.studentService.getAllStudentsAsync().then(data=>{
      this.students =data;
    });
  }

  SaveData() : void{
    if(this.students.indexOf(this.student) <-0){
      this.students.push(this.student);
      
    }
    else{
      
    }
    this.student = new Student();
    
  }
  NewStudent():void{
    this.student = new Student();
  }
  SaveNext():void{

  }
  // IsProperName(value:string):boolean{
  //   // let re = new RegExp('^[A-Z][a-z]+\\s[A-Z][a-z]+');
  //   // return re.test();

  // }

  IsProperName(value : string) : boolean{ 
    let re  = new RegExp('^[A-Z][a-z]+\\s[A-Z][a-z]+');
    return re.test(value);
  }
  EditStudent(event: Student): void {
    //this.student = event;
    this.studentService.updateStudent(event.RollNumber,event);
  }
  DeleteStudent(event: Student): void {
    this.students.splice(this.students.indexOf(event),1);

  }
}
