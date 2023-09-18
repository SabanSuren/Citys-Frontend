import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private authService:AuthService, private alertifyService:AlertifyService) { }

  loginUser:any={}

  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginUser);

  }

  logOut(){
    this.authService.logOut();
    this.alertifyService.error('Sistemden Çikiş Yapildi');
  }

  get isAuthticated(){
    return this.authService.loggedIn();
  }

}
