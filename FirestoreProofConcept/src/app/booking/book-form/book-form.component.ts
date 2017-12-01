import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { UserService } from '../../users/user.service';

import { User } from '../../users/user';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book = {
    requirements: '', start_date: new Date, end_date: new Date, status: '', id: '',
    user: ''
  };

  constructor(private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
  }

  createBook(form): void {
    const userRef = this.userService.getReferenceUser().ref;
    this.book.user = userRef;
    this.bookService.create(this.book);
    form.reset();
  }

}
