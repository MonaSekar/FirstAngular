import { Injectable } from '@angular/core';
import { User } from 'src/Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  ExistingUsers:User[]
  user:User={uname:"",upass:"",role:""}
  currUser:any
  isValidUser:boolean

  token:string

  constructor(private router:Router) { 
    this.ExistingUsers = [
      {uname:"mona",upass:"mmm",role:"admin"},
      {uname:"dk",upass:"ddd",role:"admin"},
      {uname:"madhu",upass:"mmm",role:"student"},
      {uname:"vikram",upass:"vvv",role:"student"}
    ]

    this.isValidUser=false
   }

  getAllUsers(): any{
    return this.ExistingUsers
  }

  getAuthToken(userObj:User){
    //console.log(userObj)
    this.currUser = this.ExistingUsers.filter(x=>x.uname == userObj.uname && x.upass == userObj.upass && x.role == userObj.role)
    console.log("authservice" )
    console.log(this.currUser)
    if(this.currUser.length > 0){
      console.log("token set")
      this.token="Success"
      this.SaveToken()
    }
    else{
      this.token=""
    }
  }

  SaveToken(){
    localStorage.setItem("token",this.token);
    console.log(localStorage.getItem("token"))

  }

  IsLoggedIn(){
    return localStorage.getItem("token") != null;
  } 

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

  // getToken(){
  //   return localStorage.getItem("token");
  // }

  
}
