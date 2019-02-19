import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.get(`http://localhost:9876/api/user`,  {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }
  public getUsernamefromId(data: Object): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/conversation/fromId`, data,  {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }
  public getUserfromId(data: Object): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/user/fromId`, data,  {headers: myHeader})
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
