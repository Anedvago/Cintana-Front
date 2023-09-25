import { Component } from '@angular/core';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { InputComponent } from 'src/app/core/input/input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonBlueComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  public login() {
    this.authService.login(this.email, this.password).then((result: any) => {
      if (result.user != undefined) {
        this.navigateTo();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error en la autenticacion!',
          timer: 2000,
        });
      }
    });
  }

  public navigateTo() {
    this.router.navigate(['/admin/dashboard']);
  }

  public emailOnChange(event: any): void {
    this.email = event;
  }
  public passwordOnChange(event: any): void {
    this.password = event;
  }
}
