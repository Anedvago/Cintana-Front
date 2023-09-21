import { Component } from '@angular/core';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { InputComponent } from 'src/app/core/input/input.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonBlueComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  public navigateTo() {
    this.router.navigate(['/admin/dashboard']);
  }
}
