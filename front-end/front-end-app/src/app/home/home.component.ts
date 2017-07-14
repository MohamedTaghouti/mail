import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value : string = "eeeee";
  users: User[];

  constructor(private _userService: UserService) { }

  ngOnInit():void {
    this.value = this._userService.getApp();
    this._userService.getUsers().then(users => this.users = users);
  }

}
