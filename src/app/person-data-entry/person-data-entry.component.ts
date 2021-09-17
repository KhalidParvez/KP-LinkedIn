import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, person, WorkHistory } from '../models/person';

@Component({
  selector: 'app-person-data-entry',
  templateUrl: './person-data-entry.component.html',
  styleUrls: ['./person-data-entry.component.css']
})


export class PersonDataEntryComponent implements OnInit {
  // Name : FormControl;
  // Age : FormControl;
  arName: string[][];
  perLst: any[];
  personForm: FormGroup;
  WorkHistory: FormGroup;
  personDate:Array<person> =[];
  WorkHistoryArray: Array<FormGroup> = [];
  // formBuild
  constructor(
    private readonly fb: FormBuilder
  ) {
    // this.personForm= new FormGroup({
    //   Name:new FormControl(" ",Validators.required),
    //   Age:new FormControl(),
    //   Address:new FormGroup({
    //     Street1:new FormControl(""),
    //     City:new FormControl(""),
    //   })
    // })

    this.personForm = this.fb.group({
      Name: ['', Validators.required],
      Age: [''],
      Address: this.fb.group({
        Street1: [''],
        City: ['']
      }),
      // WorkHistory:this.fb.array([
      //   this.fb.group({
      //     CompanyName:[''],
      //     StartDate:[''],
      //     EndDate:[''],
      //     Description:['']
      //   })
      // ])
      WorkHistory: this.fb.array(this.WorkHistoryArray)

    })
    this.WorkHistory = this.fb.group({
      CompanyName: [''],
      StartDate: [''],
      EndDate: [''],
      Description: ['']
    })
    this.arName = [];
    this.perLst = [];

  }

  async ngOnInit() {
    // this.service.function.subscribe(arg => this.property = arg);
    // this.service.function.subscribe(arg =>{
    //   this.property = arg
    // });
    
    // this.WorkHistoryArray = await this.service.get().toPromise();
  }
  // async get(){

  // }

  get Name(){
   return this.personForm.get('Name');
  }
  get Age(){
    return this.personForm.get('Name');
   }
   get WorkHistoryArrays():FormArray{
    return this.personForm.get('WorKHistory') as FormArray;
   }
  ShowData() {
    // console.log(`Name is ${this.Name} and age is ${this.Age}`);

  }

  AddWorkHistory(): void {
    this.WorkHistoryArray.push(
      this.fb.group({
        CompanyName: [''],
        StartDate: [''],
        EndDate: [''],
        Description: ['']
      })
    )
  }
  SaveWorkHistory():void{
    console.log(this.WorkHistoryArray);
   // const currentWorkHistory = this.WorkHistoryArray.push(item);
    // this.personDate.WorkHistory.push(this.WorkHistoryArray);
  }
  PushData() {
    //this.perLst.push(new person(this.Name,this.Age));
    //this.perLst.push({Name:this.Name,Age: this.Age});
    //this.arName.push([this.Name,this.Age]);
    // this.Name='';
    // this.Age='';
    this.perLst.push(this.personForm);
    console.log(this.perLst);
  }

}
