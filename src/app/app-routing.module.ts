import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookstoreAboutComponent } from './bookstore-about/bookstore-about.component';
import { BookstoreHomeComponent } from './bookstore-home/bookstore-home.component';

const routes: Routes = [
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'},

  {path: 'home',
  component: BookstoreHomeComponent},

  {path: 'about',
  component: BookstoreAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
