import { Injectable } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { Skill } from 'src/Models/Skill';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  // x:Employee = {Eid:0,Ename:"",Salary:0,Doj:new Date(),
  //               Dept:{DptId:0,DptName:""},
  //               SKills:[
  //                 {SkId:0,SkTitle:"",selected:false}
  //               ]
  //             };
  empArr:Employee[]=[
    {Eid:714,Ename:"Mona",Salary:50000,Doj:new Date("12/7/2001"),
      Dept:{DptId:100,DptName:"D1"},SKills:[{SkId:11,SkTitle:"Python",selected:true}]},
    {Eid:715,Ename:"Madhu",Salary:60000,Doj:new Date("11/16/2001"),Dept:{DptId:100,DptName:"D1"},SKills:[{SkId:11,SkTitle:"C#",selected:true}]},
    {Eid:716,Ename:"DK",Salary:70000,Doj:new Date("04/01/2001"),Dept:{DptId:100,DptName:"D1"},SKills:[{SkId:11,SkTitle:"Angular",selected:true}]}
  ]

  skillsArr: Skill[]=[
    {SkId:11,SkTitle:"C#",selected:false},
    {SkId:22,SkTitle:"Angular",selected:false},
    {SkId:33,SkTitle:"React",selected:false}
  ]

  DeptArr: Department[]=[
    {DptId:100,DptName:"D1"},
    {DptId:200,DptName:"D2"},
    {DptId:300,DptName:"D3"},
  ]

 // empArr:Employee[];

  constructor() { }

  getAllEmps(): any{
    return this.empArr
  }

  AddEmp(x:Employee):void{
    console.log(x);
    this.empArr.push(x)
  }
}
