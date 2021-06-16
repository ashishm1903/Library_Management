import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component'
import{DashboardComponent} from './dashboard/dashboard.component'
import{IssuebookComponent} from './issuebook/issuebook.component'
import{IssuebookrecordComponent} from './issuebookrecord/issuebookrecord.component'
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:"dashboard" , canActivate:[AuthGuard],component:DashboardComponent
  },
  {
    path:"issuebook" ,canActivate:[AuthGuard], component:IssuebookComponent
  },
  {
    path:"issuebookrecord" , canActivate:[AuthGuard],component:IssuebookrecordComponent
  },
  {
    path:"" , component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
