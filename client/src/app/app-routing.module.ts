import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { NewTestComponent } from './containers/new-test/new-test.component';

const routes: Routes = [

  {
    path:'',
    component: MainComponent
  },
  {
    path:'new',
    component: NewTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
