import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { FeedbackformComponent } from './feedbackform/feedbackform.component';

const routes: Routes = [{
  path:'',
    component:NavbarComponent,
   
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
     
       {
           path:'employee-detail',
           component:EmployeeDetailComponent
      },
      {
        path:'feedbackform',
        component:FeedbackformComponent

      }
      
    ]

}]
   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
