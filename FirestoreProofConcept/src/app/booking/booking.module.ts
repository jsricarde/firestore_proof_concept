import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookFormComponent } from './book-form/book-form.component';
import { UserService } from '../users/user.service';
import { BookService } from '../booking/book.service';
// import { BookingRoutingModule } from '../booking/booking-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    // BookingRoutingModule
  ],
  declarations: [BookFormComponent],
  providers: [UserService, BookService]
})
export class BookingModule { }
