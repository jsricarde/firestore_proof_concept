import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';


const routes: Routes = [
  { path: '', component: BookFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BookingRoutingModule { }
