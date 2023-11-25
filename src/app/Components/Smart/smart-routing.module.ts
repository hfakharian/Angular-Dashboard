import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardUser } from 'src/app/Services/Guard/auth.guard.user';
import { ResourceConfig } from 'src/app/Resources/resource';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'fileUploader',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: ResourceConfig.Routes.Smart.Head
    },
    children: [
      {
        path: 'fileUploader',
        component: FileUploaderComponent,
        canActivate:[AuthGuardUser],
        data: {
          title: ResourceConfig.Routes.Smart.FileUploader
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartRoutingModule {}
