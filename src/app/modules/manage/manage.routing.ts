import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { CanActivateAuthGuard } from '../../shared/guards/dashboard.authGuard';

const routes: Routes = [
    {
        path: '',
        component: ManageComponent,
        data: {title: 'Projects', access: ['admin', 'manager']},
        canActivate: [CanActivateAuthGuard],
        // resolve: {
        //   projects: ProjectsResolve
        // }
    //   { path: ':id',
    //     component: ProjecteditComponent,
    //     data: {title: 'Edit Project', access: ['admin', 'manager']},
    //     canActivate: [CanActivateAuthGuard],
    //     resolve: {
    //       project: ProjectResolve
    //     },
    children: [
        { path: '', redirectTo: 'projects' },
        { path: 'projects', loadChildren: '../projects/projects.module#ProjectsModule' },
      ]
    }
//   }
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ManageRoutingModule { }