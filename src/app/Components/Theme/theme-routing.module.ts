import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { AuthGuardUser } from 'src/app/Services/Guard/auth.guard.user';
import { ResourceConfig } from 'src/app/Resources/resource';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'color',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: ResourceConfig.Routes.Color.Theme
    },
    children: [
      {
        path: 'color',
        component: ColorComponent,
        canActivate:[AuthGuardUser],
        data: {
          title: ResourceConfig.Routes.Color.Colors
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
