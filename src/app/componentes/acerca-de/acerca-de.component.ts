import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  constructor(private loginService:LoginService){}

  login(){
    return this.loginService.estaLogueado();
  } 
}
