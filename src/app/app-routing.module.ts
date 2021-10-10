import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificatsComponent } from './certificats/certificats.component';

const routes: Routes = [ {
  path:'Certificate' ,
  component:CertificatsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
