import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from './book';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';

@Injectable()
export class BookService {
  /**
   * @type {Observable<Book>} book
   * @type {AngularFirestoreCollection<Book>} booksCollection
   */
  book: Observable<Book | null>;
  booksCollection: AngularFirestoreCollection<Book>;

  /**
   * @constructor BookService
   * @param {AngularFirestore} afs
   * @param {UserService} userService
   */
  constructor(private afs: AngularFirestore, private userService: UserService) {
    this.booksCollection = this.afs.collection('bookings');
  }

  /**
   * create void function
   * Add a new book to bookings collection.
   * @param {Book} bookData
   * @memberof BookService
   */
  create(bookData: Book) {
    // Persist a document id
    const id = this.afs.createId();
    bookData.id = id;
    this.booksCollection.add(bookData);
  }

  /**
   * getByUserRef function
   * Get bunch of books by userRef
   * @param {any} userRef
   * @returns {AngularFirestoreCollection<Book>} booksCollection
   * @memberof BookService
   */
  getByUserRef(userRef) {
    return this.booksCollection = this.afs.collection('bookings', ref => ref.where('user', '==', userRef));
  }
}
