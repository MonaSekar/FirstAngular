import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PlayerDataComponent } from './player-data/player-data.component';
import { empFilter } from './emplist/empFilterPipe';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EmplistComponent,
    EmpAddComponent,
    LoginComponent,
    HomeComponent,
    PlayerDataComponent,
    empFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
