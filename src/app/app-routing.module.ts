import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: ()=> import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: ()=> import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
