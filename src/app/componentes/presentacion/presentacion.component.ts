import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  constructor(private loginService:LoginService){}
  
  login(){
    return this.loginService.estaLogueado();
  }
   
  datosPresentacion:string[] = [
  "./assets/fotoPerfil.jpeg", 
  'Florencia Esposito' ,
  'Programador Full Stack Developer Jr.',
  'Buenos Aires, Argentina.'];



}
