// Import
import { Component } from '@angular/core';
import { UserModel } from "./models/user.model";
import { AuthService } from "./services/auth/auth.service";
import {Router} from "@angular/router"

// Definition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ AuthService ]
  // styleUrls: ['./app.component.css']
})

// Export
export class AppComponent {
  public myTitle: String;
  public formData: UserModel;
  public loginData: UserModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ){
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
    this.loginData = {
      email: undefined,
      password: undefined
    }

  }




}
