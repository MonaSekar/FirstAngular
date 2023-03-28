import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit{
  //e:Employee={Eid:0,Ename:"",Salary:0,Doj:new Date()};
  empArr:Employee[];
  searchItem:string;
  ngOnInit():void{
    this.empArr = this.empservice.getAllEmps();
  }
  constructor(private empservice:EmpService){

  }
}
