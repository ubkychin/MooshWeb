import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ThrowStmt } from '@angular/compiler';
import { User } from './classes/user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor(private httpService: HttpService, private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpService.getAll('users') as Observable<User[]>;
  }
}
