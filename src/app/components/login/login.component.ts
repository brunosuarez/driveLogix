import { Component } from '@angular/core';
import { AuthService } from '../../app.component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  showSidenav = false;

  constructor(private authService: AuthService) {}
}

