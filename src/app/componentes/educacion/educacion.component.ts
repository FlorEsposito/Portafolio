import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  constructor(private loginService:LoginService){}
  
  login(){
    return this.loginService.estaLogueado();
  } 
}
