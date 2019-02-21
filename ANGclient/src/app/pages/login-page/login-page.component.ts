import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { AuthService } from "../../services/auth/auth.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [ AuthService ]

})
export class LoginPageComponent implements OnInit {
  public loginData: UserModel;

  constructor( private authService: AuthService, private router: Router ) {
    this.loginData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
   }

  public loginUser( ): void {
    this.authService.login(this.loginData)
    .then( (apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.msg == 'User logged'){
        this.router.navigate(['/chat'])

      } else{
        console.log('pas log')

      }
    })
    .catch( apiResponse => console.log(apiResponse) )
  }
  public authUser( ): void {
    this.authService.auth()
    .then( (apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.msg == 'user auth'){
        this.router.navigate(['/chat'])
      } })
    .catch( apiResponse => console.log(apiResponse) )
  }

  ngOnInit() {
    this.authUser()
  }

}
