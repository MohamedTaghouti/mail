import { Injectable } from '@angular/core';
import {User} from './model/User';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {

  usersUrl = 'http://localhost:8083/heroes';
  private headers = new Headers({'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  constructor(private http: Http,
              private authenticationService: AuthenticationService) { }

  getApp(): string {
    return 'Test';
  }

    getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  create(name: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<User> {
    return this.getUsers()
      .then(heroes => heroes.find(hero => hero.id === id))
  }

  update(hero: User): Promise<User> {
    const url = `${this.usersUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log(`hero.service - deleting ${id}`);
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }



}
