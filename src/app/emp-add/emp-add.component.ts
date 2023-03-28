import { Component } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { Skill } from 'src/Models/Skill';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent {
    e:Employee = {Eid:0,Ename:"",Salary:0,Doj:new Date(),
                Dept:{DptId:0,DptName:""},
                SKills:[
                  {SkId:0,SkTitle:"",selected:false},
                  {SkId:0,SkTitle:"",selected:false},
                  {SkId:0,SkTitle:"",selected:false}
                ],
              };
    sks:Skill[]
    esks:Skill[]
    dpts:Department[]
    
    constructor(private empservice:EmpService){
      this.sks = this.empservice.skillsArr;
      //this.esks = this.empservice.skillsArr;
      this.dpts = this.empservice.DeptArr;
    }

  

    AddEmployee():void{
      this.e.SKills = this.sks;
      console.log(this.e);
      this.empservice.AddEmp(this.e);
      this.sks = this.empservice.skillsArr;
    }
}
