import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ReactiveformSignupComponent} from "./reactiveform-signup/reactiveform-signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPlayerComponent } from './add-player/add-player.component';

const routers: Routes = [
  {path: '', redirectTo: '/loginpage', pathMatch: 'full'},
  {path: 'signuppage', component: ReactiveformSignupComponent},
  {path: 'loginpage', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'players', component: AddPlayerComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
