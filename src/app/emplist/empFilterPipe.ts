import {Pipe,PipeTransform} from '@angular/core';
import {Employee} from '../../Models/Employee';

@Pipe({
    name:'empFilter'
})
export class empFilter implements PipeTransform{
    transform(emps: Employee[], empName:string) {
        if(!emps || !empName){
            return emps;
        }
        return emps.filter((x=>x.Ename.toLowerCase().indexOf(empName.toLowerCase())!==-1));
    }
}