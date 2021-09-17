import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedResolveGuard } from './linked-resolve.guard';
import { LinkedinProfileComponent } from './linkedin-profile/linkedin-profile.component';
import { MinilinkedinComponent } from './minilinkedin/minilinkedin.component';

const routes: Routes = [
  {path:'linkedIn',component:MinilinkedinComponent,resolve:{
    linkedIdData:LinkedResolveGuard
  }},
  { path: '',   redirectTo: '/linkedIn', pathMatch: 'full' },
  {path:'my-profile',component:LinkedinProfileComponent},

  // {path:'**',component:MinilinkedinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
