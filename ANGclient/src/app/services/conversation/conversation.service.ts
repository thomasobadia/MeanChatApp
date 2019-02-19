import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../../models/user.model";
import { ConversationModel } from "../../models/conversation.model";


@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: HttpClient) { }

  public createConv( data : ConversationModel): Promise<any> {
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/conversation/`, data, {headers: myHeader})
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  public getConversations(data: Object): Promise<any> {
    console.log("data")
    console.log(data)
    let myHeader = new HttpHeaders()
    myHeader.append('Content-type', 'application/json')
    return this.http.post(`http://localhost:9876/api/conversation/getall`, data , {headers: myHeader})
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
