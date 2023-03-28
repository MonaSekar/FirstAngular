import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/Models/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _user:User={uname: "",upass:"",role:""}
  loginForm:FormGroup=new FormGroup({})
  errMsg:string

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName : new FormControl(this._user.uname,[Validators.required]),
      userPass : new FormControl(this._user.upass,[Validators.required]),
      userRole : new FormControl(this._user.role,[Validators.required])
    });
  }

  login(): void{
    // {{debugger}}
    let currUser = {"uname":this.loginForm.value.userName,
                    "upass":this.loginForm.value.userPass,
                    "role" :this.loginForm.value.userRole}
    //console.log(currUser)
    
      this.authService.getAuthToken(currUser)
      
      if(this.authService.token!=""){
        //localStorage.setItem("token",this.authService.token)
        this.router.navigateByUrl('/home');
      }
      else{
        this.errMsg = "Username / Password invalid"
        this.router.navigateByUrl('/login')
      }
    
    
    
  }

}
