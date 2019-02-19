import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageModel } from "../../models/message.model";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  public send( data : MessageModel): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/message/`, data, {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  public getMessages(data: Object): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/message/getFromId`, data,  {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  public getConversationfromId(data: Object): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/conversation/fromId`, data,  {headers: myHeader})
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
