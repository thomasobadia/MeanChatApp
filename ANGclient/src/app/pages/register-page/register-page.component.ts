import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { AuthService } from "../../services/auth/auth.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  providers: [ AuthService ]

})
export class RegisterPageComponent implements OnInit {
  public formData: UserModel;

  constructor( private authService: AuthService, private route: ActivatedRoute, private router: Router ) {
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
   }

  public formSubmit( ): void {
    this.authService.register(this.formData)
    .then( apiResponse => this.router.navigate(['/chat']) )
    .catch( apiResponse => console.log(apiResponse) )
  }
  ngOnInit() {

  }

}
