import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutPanelComponent } from './Containers';
import { SigninComponent } from './Components/Public/signin/signin.component';
import { SignupComponent } from './Components/Public/signup/signup.component';
import { ResourceConfig } from './Resources/resource';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},
{
  path: 'signin',
  component: SigninComponent,
  data: {
    title: ResourceConfig.Routes.Signin
  }
},
{
  path: 'signup',
  component: SignupComponent,
  data: {
    title: ResourceConfig.Routes.Signup
  }
},
{
  path: '',
  component: MasterLayoutPanelComponent,
  data: {
    title: ResourceConfig.Routes.Home
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./Components/Dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'theme',
      loadChildren: () => import('./Components/Theme/theme.module').then(m => m.ThemeModule)
    },
    {
      path: 'smart',
      loadChildren: () => import('./Components/Smart/smart.module').then(m => m.SmartModule)
    }
  ]
},
//{ path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
