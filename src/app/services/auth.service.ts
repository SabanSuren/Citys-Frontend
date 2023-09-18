import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify-service';
import { LoginUser } from '../models/loginUser';
import { RegisterUser } from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  path = 'https://localhost:44320/api/auth/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY = 'token';

  login(LoginUser: LoginUser) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post(this.path + 'login', LoginUser, { headers: headers }).subscribe(
      (data: any) => {
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());

        this.alertifyService.success('Sisteme Giriş Yapıldı');
        this.router.navigateByUrl('/city');
      },
      (error) => {
        // Hata işleme kodu
      }
    );
  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post(this.path + 'register', registerUser, { headers: headers }).subscribe(
      () => {
        // Kayıt başarılı olduysa yapılacak işlemler
      },
      (error) => {
        // Hata işleme kodu
      }
    );
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  getCurrentUserId() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken && decodedToken.nameid) {
        return decodedToken.nameid;
      }
    }
    return null;
  }
}
