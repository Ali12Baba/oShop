import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/user';
import { select, Store } from '@ngrx/store';
import * as fromUser from '..//.//..//user.selectors';
import * as UserActions from '..//..//user.actions';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit {
  pageTitle = 'User List';
  users: IUser[] = [];
  errorMessage = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new UserActions.LoadUsers()); //action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
    this.store.pipe(select(fromUser.getError)).subscribe((err) => {
      this.errorMessage = err;
    });
  }
}
