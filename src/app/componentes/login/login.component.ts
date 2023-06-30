import { Component, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {
    constructor(private location:Location, private loginService:LoginService) {}
      
      goBack(): void {
        this.location.back();
      }

      login(form:NgForm){
          const usuario=form.value.usuario;
          const contrasenia=form.value.password;
          this.loginService.login(usuario, contrasenia);
          if (this.loginService.estaLogueado()){this.goBack()};
      }
}
