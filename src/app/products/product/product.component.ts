import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IUser } from "src/app/user";
import * as fromUser from '..//.//..//user.selectors';
import * as UserActions from '..//..//user.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pageTitle = 'User List';
  users: IUser[] = [];
  errorMessage = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new UserActions.LoadUsers); //action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe(
      users => {
        this.users = users;
        console.log(this.users);
      }
    )
    this.store.pipe(select(fromUser.getError)).subscribe(
      err => {
        this.errorMessage = err;
      }
    )
  }
}

