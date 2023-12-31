import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }
}
