import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../users/user.service';
import { BookService } from '../book.service';
import { Book } from '../book';
import { User } from '../../users/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Observable<Book[]>;
  user: Observable<any>;
  booksList = [];
  booksOb: Observable<Book[]>;

  constructor(private bookService: BookService, private userService: UserService) {
    const userRef = this.userService.getReferenceUser().ref;
    this.books = this.bookService.getByUserRef(userRef).valueChanges();
  }

  ngOnInit() {
    this.books.subscribe((booksData: Book[]) => {
      this.booksList = [];
      booksData.forEach((book: Book) => {
        // book.userData = { firstname: 'Juan' };
        book.user.get().then(data => {
          const userData = data.data();
          const shallowCopy = { ...book, ...userData };
          // book.user = userData;
          console.log(this.books);
          this.booksList.push(shallowCopy);
        });
      });
    });

    // this.booksOb = this.books.map(response => {
    //   // console.log('respopnse', response);
    //   const items = response;
    //   items.forEach(item => {
    //     item.user.get().then(data => {
    //       const userData = data.data();
    //       item.userData = userData;
    //     });
    //     // item.userData = 'juan';
    //   });
    //   return items;
    // });
    // this.booksOb.subscribe();
    // this.books.subscribe((booksData: Book[]) => {
    //   this.booksList = [];
    //   booksData.forEach((book: Book) => {
    //     book.userData = { firstname: 'Juan' };
    //     book.user.get().then(data => {
    //       const userData = data.data();
    //       const shallowCopy = { ...book, ...userData };
    //       // book.user = userData;
    //       console.log(this.books);
    //       this.booksList.push(shallowCopy);
    //     });
    //   });
    // });
  }

}
