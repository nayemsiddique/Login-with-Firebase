import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService ,private route:Router) { }

  haveError = false;
  isLogin = false;
  ngOnInit() {
  }
  onLoginButtonClick(login) {
    console.log(login);
    this.auth.login(login.email, login.pswd).subscribe(s => {
      console.log(s)
      this.route.navigate(['/login']);
    },
      error => {
        this.haveError = true;
        this.isLogin = false;
      }, () => {
        this.isLogin = true;
        this.haveError = false;
        // this.route.navigate([/user],relativeTo:this.)
      });
    console.log(login.email);
    console.log(login.pswd);
  }
}
