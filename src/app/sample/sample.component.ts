import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  a:number
  b:number
  c:number
  sname:string
  picture:string
  constructor(){
    // this.a = 7
    // this.b = 14
    this.picture = "../../assets/undraw_Updated_re_u4yh.png";
  }
  ngOnInit(): void {
    
  }

  addNums(): void{
    this.c = this.a + this.b
  }
}
