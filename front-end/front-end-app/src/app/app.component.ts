import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {

  }
}
