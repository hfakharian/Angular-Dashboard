import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardUser } from 'src/app/Services/Guard/auth.guard.user';
import { ResourceConfig } from 'src/app/Resources/resource';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuardUser],
    data: {
      title: ResourceConfig.Routes.Dashboard.Dashboard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
