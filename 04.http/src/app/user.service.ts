import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.URL);
  }
  getUser(id: number) {
    return this.http.get<User>(this.URL + '/' + id);
  }
  createUser(user: User) {
    return this.http.post<User>(this.URL, user);
  }

  updateUser(id: number, data: Partial<User>) {
    return this.http.patch<User>(this.URL + '/' + id, data);
  }

  deleteUser(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
