import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ AuthService ]
})
export class HomePageComponent implements OnInit {
  public isLoggedIn: Boolean = false

  constructor( private authService: AuthService ) { }

  public authUser( ): void {
    this.authService.auth()
    .then( (apiResponse) => {
      console.log(apiResponse)
      if (apiResponse.msg == 'user auth'){
        this.isLoggedIn = true
      } else{
        this.isLoggedIn = false

      }
    })
    .catch( apiResponse => console.log(apiResponse) )
  }

  ngOnInit() {
    console.log(this.isLoggedIn)
  }

}
