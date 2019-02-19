import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService{


  constructor(private http: HttpClient) { }

  public register( data : UserModel): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/user/`, data, {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }
  public login( data : UserModel): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/auth/login`, data, {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  public auth(): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/auth/auth`,  {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  public disconnect(): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/auth/disconnect`,  {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }



  private getData(res: any) {
    return res || {};
  }
  private handleError(err:any) {
    return Promise.reject(err)
  }
}
