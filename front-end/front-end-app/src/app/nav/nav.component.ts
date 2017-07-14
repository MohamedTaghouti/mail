import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  heroes: User[] = [];


  constructor(private router: Router, private heroService: UserService) { }

   ngOnInit(): void {
    this.heroService.getUsers()
      .then(
        heroes => this.heroes = heroes.slice(0, 4),
        error => {
          this.router.navigate(['login']);
          console.error('An error occurred in dashboard component, navigating to login: ', error);
        }
      );
  }


}
