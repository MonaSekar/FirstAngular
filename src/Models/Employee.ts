import { Department } from "./Department";
import { Skill } from "./Skill";

export interface Employee{
    Eid:number;
    Ename:string;
    Salary:number;
    Doj:Date;
    Dept: Department;
    SKills: Skill[]
}