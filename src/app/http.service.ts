import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './classes/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://monstermoosh.azurewebsites.net/api/';
  private userUrl = this.baseUrl + '/Users';

  user: User;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    this.httpClient.get(this.userUrl);
    return this.httpClient.get<User[]>(this.userUrl);
  }

  getAll(endpoint: string): Observable<object> {
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
