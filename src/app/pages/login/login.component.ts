import { Component } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = { usuario: '', senha: '' }; 
  erro: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  logar(event: Event): void {
    event.preventDefault();
    this.erro = false;

    this.loginService.autenticar(this.login).subscribe({
      next: (res) => {
        if (res.status === 200) {
          this.router.navigate(['/boas-vinda']);
        } else {
          this.erro = true;
        }
      },
      error: () => {
        this.erro = true;
      }
    });
  }
}
