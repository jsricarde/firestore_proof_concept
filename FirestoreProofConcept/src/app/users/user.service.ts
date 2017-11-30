import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class UserService {

  user: Observable<User | null>;
  usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users', (ref) => ref.orderBy('created_at', 'desc').limit(5));
  }

  getReferenceUser() {
    return this.afs.doc<User>('users/1RFOYVqtEmVPlTQLPDHu');
    // return this.afs.collection<User>('users').doc('1RFOYVqtEmVPlTQLPDHu');
  }

}
