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

  create(bookData: Book) {
    // Persist a document id
    const id = this.afs.createId();
    bookData.id = id;
    this.booksCollection.add(bookData);
  }

  getByUserRef(userRef) {
    return this.booksCollection = this.afs.collection('bookings', ref => ref.where('user', '==', userRef));
  }
}
