import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MessageService } from '../../services/message/message.service';
import { MessageModel } from "../../models/message.model";
import { ActivatedRoute, Router } from '@angular/router';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.css'],
  providers: [ AuthService ] && [ MessageService ]
})
export class ConversationPageComponent implements OnInit {
  public otherUserId
  public myId
  public messagesArray
  public messageFormData
  public conversationId
  public socket: SocketIOClient.Socket;



  constructor( private authService: AuthService, private messageService: MessageService, private router: Router, private route: ActivatedRoute ) {
    this.messageFormData = null
    this.socket = io.connect('http://localhost:8080');


    // this.myId = TODO
    // this.otherUserId = TODO
  }

  public authUser( ): void {
    this.authService.auth()
    .then( (apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.msg == 'user auth'){
        this.myId = apiResponse.data._id
        console.log('mon id est  ' + this.myId)
        console.log('User logged')
        this.showConversationFromId(this.conversationId)
      } else{
        this.router.navigate(['/login'])

      }
    })
    .catch( apiResponse => console.log(apiResponse) )
  }
  public createMessage(): void {
    console.log('created')
    let time = new Date();

    let from : String = this.myId
    let to : String =  this.otherUserId
    let date: String = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let content: String = this.messageFormData
    let message: MessageModel = {
      idconversation : this.conversationId,
      from : from,
      to: to,
      date:date,
      content:content
    }

    this.sendMessage(message)
    this.showMessages()

  }
  public showConversationFromId(id): void {
    // show users from conv
    console.log(id)
    this.messageService.getConversationfromId({id: id})
    .then( (apiResponse) => {
      if(apiResponse.data.user1 == this.myId){
        console.log(apiResponse)
        this.otherUserId = apiResponse.data.user2

      } else {
        console.log(apiResponse.data + '2')
        this.otherUserId = apiResponse.data.user1
      }
      console.log('other user id : ' + this.otherUserId)

    })
    .catch( apiResponse => console.log(apiResponse) )
  }
  public sendMessage( message: MessageModel ): void {
    this.messageService.send(message)
    .then(  apiResponse => {
      console.log(apiResponse)
      this.socket.emit('refreshMessages', {msg: this.conversationId})
    } )
    .catch( apiResponse => console.log(apiResponse) )
  }

  public showMessages( ): void {
    this.messageService.getMessages({id:this.conversationId })
    .then( (apiResponse) => {
      this.messagesArray = apiResponse
      console.log(this.messagesArray)

    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  ngOnInit() {


    this.route.params.subscribe((params) => {
      // this callback is fired every time the parameters change
      this.conversationId = params.id
  })

    this.authUser()
    this.showMessages( )
    this.socket.on('refresh', (data) => {
      console.log('**********************************************************')
      console.log(data.msg.msg)
      if(data.msg.msg == this.conversationId){
        this.showMessages()
      }
    })
}


}



