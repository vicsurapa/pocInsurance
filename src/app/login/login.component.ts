import { Component, OnInit } from '@angular/core';
import { NgModel, FormsModule, NgForm} from '@angular/forms';
import { LoginService} from './login.service';
import { User } from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  user: User = {'usname': '', 'pwd' : ''};
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  sendData() {
   this.loginService.login(this.user).subscribe((res) => {
     console.log(res);
   });
  }
}
