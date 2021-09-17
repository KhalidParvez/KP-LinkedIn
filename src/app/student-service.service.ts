import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
private students : Array<Student>;
private readonly baseurl : string = "http://localhost:9209/api/student";
  constructor(private readonly http : HttpClient) {
    this.students = new Array<Student>();
   }

  getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(this.baseurl);
    //return this.students;
  }

  async getAllStudentsAsync(): Promise<Array<Student>> {
    return await this.http.get<Array<Student>>(this.baseurl).toPromise();
    //return this.students;
  }

  getStudentByRollNUmber(rollNUmber : number): Observable<Student> | undefined {
    return this.http.get<Student>(`${this.baseurl}/${rollNUmber}`);
    //return this.getAllStudents().find(x=>x.RollNumber === rollNUmber);
  }

   
  updateStudent(rollNUmber : number, student : Student) : Observable< Student> | undefined {
     return this.http.put<Student>(`${this.baseurl}/${rollNUmber}`,JSON.stringify(student));
    // let currentStudent = this.getStudentByRollNUmber(rollNUmber);
    //  if(currentStudent != undefined){
    //    currentStudent ={...student};
    //  }
    //  return currentStudent;
  }

}
