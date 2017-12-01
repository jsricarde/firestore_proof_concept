import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { UserService } from './users/user.service';
// import { BookService } from './booking/book.service';
import { Book } from './booking/book';
import { User } from './users/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  books: Observable<any[]>;
  user: Observable<any>;
  constructor() { }
  // constructor(private bookService: BookService, private userService: UserService) {
  //   console.log('ref', this.userService.getReferenceUser().ref);
  //   this.books = this.bookService.getByUserRef(this.userService.getReferenceUser().ref).valueChanges();
  //   console.log('this.books', this.books);
  //   this.books.subscribe(bookData => {
  //     console.log('bookData', bookData);
  //   });
  // }
}
