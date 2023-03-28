import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path: 'samplePage',component:SampleComponent},
  {path: 'EmpPage',component:EmplistComponent},
  {path: 'EmpAddPage',component:EmpAddComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'PlayerPage',component:PlayerDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
