import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

import { Book } from './book';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
@Injectable()
export class BookService {

  book: Observable<Book | null>;
  booksCollection: AngularFirestoreCollection<Book>;

  constructor(private afs: AngularFirestore, private userService: UserService) {
    this.booksCollection = this.afs.collection('bookings');
  }

  create(content: string) {
    const book: Book = {
      end_date: new Date(), start_date: new Date(), requirements: 'test_req',
      status: 'Check-In', user: ''
    };
    return this.booksCollection.add(book);
  }

  getByUserRef(userRef) {
    return this.booksCollection = this.afs.collection('bookings', ref => ref.where('user', '==', userRef));
  }
}
