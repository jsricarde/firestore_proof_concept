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

  constructor(private bookService: BookService, private userService: UserService) {
    const userRef = this.userService.getReferenceUser().ref;
    this.books = this.bookService.getByUserRef(userRef).valueChanges();
  }

  ngOnInit() {
    this.books.subscribe((booksData: Book[]) => {
      booksData.forEach((book: Book) => {
        // book.user.get().then(data => console.log(data.data()));
        book.user.get().then(data => {
          console.log(data.data());
        });
      });
    });
  }

}
