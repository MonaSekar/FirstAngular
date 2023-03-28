import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  local:any
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.local=localStorage

  }
  logout(){
    this.authService.Logout()
  }
}
