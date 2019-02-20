import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";
import { UserService } from "../../services/user/user.service";
import { ConversationService } from "../../services/conversation/conversation.service";
import { UserModel } from '../../models/user.model';
import {Router} from "@angular/router"


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  providers: [ AuthService ] && [ UserService ] && [ ConversationService ]

})
export class ChatPageComponent implements OnInit {
  public usersArray;
  public conversationsArray;
  public userId;



  constructor(
    private authService: AuthService,
    private userService: UserService,
    private conversationService: ConversationService,
    private router: Router,
  ) {

  }

  public authUser( ): void {
    this.authService.auth()
    .then( (apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.msg == 'user auth'){
        this.userId = apiResponse.data._id
        this.showConversations(this.userId)
        console.log(this.userId)
        console.log('User logged')
      } else{
        console.log('ca a pas marché')
        this.router.navigate(['/login'])

      }
    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  public disconnect(): void {
    console.log('hello')

    this.authService.disconnect()
    document.cookie = 'berners=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigate(['/'])
  }

  public showUsers( ): void {
    this.userService.getUsers()
    .then( (apiResponse) => {
      this.usersArray = apiResponse
      console.log(this.usersArray)

    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  public createConversation( id ): void {
    this.conversationService.createConv({user1: this.userId, user2: id})
    .then( apiResponse => {
      console.log(apiResponse)
      console.log("this.conversationsArray")
      console.log(this.conversationsArray)
      if(apiResponse.msg =="Conv created: ok"){
        this.conversationsArray.conversations.push(apiResponse.data)
        this.showUsernameFromId(this.conversationsArray.conversations[this.conversationsArray.conversations.length-1]._id, this.userId, this.conversationsArray.conversations.length-1)

      }
    } )
    .catch( apiResponse => console.log(apiResponse) )
    console.log(id , 'et',  this.userId)
  }

  public showConversations(id): void {
    console.log('win')
    console.log({id: id})
    this.conversationService.getConversations({id: id})
    .then( (apiResponse) => {
      this.conversationsArray = apiResponse
      for (let i = 0; i < apiResponse.conversations.length ; i++) {
        this.showUsernameFromId( apiResponse.conversations[i]._id, this.userId, i)
      }
      console.log(this.conversationsArray)
    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  public showUsernameFromId(id, myId, index): void {
    // show users from conv

    this.userService.getUsernamefromId({id: id})
    .then( (apiResponse) => {
      console.log(apiResponse)
      if(apiResponse.data.user1 == myId){
        console.log(this.usersArray.users.find((x => x._id === apiResponse.data.user2)).name)
        this.conversationsArray.conversations[index].name = this.usersArray.users.find((x => x._id === apiResponse.data.user2)).name
      } else {
        this.conversationsArray.conversations[index].name = this.usersArray.users.find((x => x._id === apiResponse.data.user1)).name
      }

    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  public showUserFromId(id: String) {
    this.userService.getUserfromId({id: id})
    .then( (apiResponse) => {
      console.log('ton pote cest' + apiResponse.data.name)
    })
    .catch( apiResponse => {
      return apiResponse.data
    })

    console.log("avant")

  }




  ngOnInit() {
    this.authUser()
    this.showUsers()


  }



}
