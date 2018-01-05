import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
/* Add to necessary AngularFire modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
/* End to add to necessary AngularFire modules */
import { UserService } from './users/user.service';
import { BookService } from './booking/book.service';
import { BookFormComponent } from './booking/book-form/book-form.component';
import { BooklistComponent } from './booking/booklist/booklist.component';
// import environment data(firebase keys).
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [ UserService, BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
