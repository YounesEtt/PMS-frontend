import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseServerUrl = "http://localhost:5103/api/";
  private userPayload: any;

  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) { 
    this.userPayload = this.decodedToken();
  }

  SignUpUser(User: any){
    return this.http.post(this.baseServerUrl + "User/CreateUser", User, { responseType: 'text' });
  }
  
  LoginUser(identifier: string, password: string) {
    return this.http.post(this.baseServerUrl + "User/LoginUser", {
      Identifier: identifier,
      Password: password
    }, { responseType: 'text' });
  }

  // JWT
  StoreToken(tokenValue: string){
    if(isPlatformBrowser(this.platformId)){ // Check if the platform is browser
      localStorage.setItem('token', tokenValue);
    }
  }

  getToken(){
    if(isPlatformBrowser(this.platformId)){ // Check if the platform is browser
      return localStorage.getItem('token');
    }
    return null;
  }

  IsLogedIn(): boolean {
    if(isPlatformBrowser(this.platformId)){ // Check if the platform is browser
      return !!localStorage.getItem('token');
    }
    return false;
  }

  SignOut(){
    if(isPlatformBrowser(this.platformId)){ // Check if the platform is browser
      localStorage.clear();
      this.router.navigateByUrl("/login").then(() => {
        //window.location.reload(); // Reload the page after navigating to login
      });
    }
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken(); // This can be null

    // Check if the token is not null before decoding
    if (token) {
      return jwtHelper.decodeToken(token);
    } else {
      console.warn('No token found');
      return null; // Return null if there is no token
    }
  }

  getFullNameFromToken(){
    const userPayload = this.decodedToken(); // Call the method to get the most recent token payload
    if(userPayload) {
      return userPayload.unique_name;
    }
    return null; // Return null if there is no user payload
  }

  getRoleFromToken(){
    const userPayload = this.decodedToken(); // Call the method to get the most recent token payload
    if(userPayload) {
      return userPayload.role;
    }
    return null; // Return null if there is no user payload
  }

  getUserIdFromToken() {
    const userPayload = this.decodedToken(); // Call the method to get the most recent token payload
    if (userPayload) {
      return userPayload.id; // Assuming the ID field in your token is named 'id'
    }
    return null; // Return null if there is no user payload
  }
}
