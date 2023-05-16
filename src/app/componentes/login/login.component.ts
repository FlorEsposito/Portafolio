import { Component, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {
    constructor(private location: Location) {}
  
      private habilitarBotones:boolean = false;

      public getHabilitar(): boolean{
        return this.habilitarBotones;
      }
      
      goBack(): void {
        this.location.back();
      }

      login(form:NgForm){
          const usuario=form.value.usuario;
          const contrasenia=form.value.password;
          
      }
}
