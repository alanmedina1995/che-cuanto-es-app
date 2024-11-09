import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/users';

  private activeUserSubject = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) { }


  auth(){
    return this.activeUserSubject.asObservable();
  }

  signUp(user: User) {
    return this.http.post<User>(this.baseUrl, user)
    .pipe(
      map((u) => {
        this.activeUserSubject.next(u);
        return true;
      })
    );
  }

  login(user:User){
    return this.http.get<User[]>(`${this.baseUrl}?username=${user.username}`)
    .pipe(
      map(([u]) => {
        if(u && u.password === user.password) {
          this.activeUserSubject.next(u);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    this.activeUserSubject.next(undefined);
    return of(true);
  }

}
