import { Injectable } from '@angular/core';
import { URL} from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 constructor(private http: HttpClient) {
  }
  login(user): Observable<any> {
    console.log(URL, ' ' , user);
    return this.http.post('http://' + URL + '/postLogin', user);
  }
}
