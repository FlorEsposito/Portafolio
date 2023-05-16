import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  constructor(private loginComponent:LoginComponent){}
  
  login:boolean = this.loginComponent.getHabilitar()
  datosPresentacion:string[] = [
  "./assets/fotoPerfil.jpeg", 
  'Florencia Esposito' ,
  'Programador Full Stack Developer Jr.',
  'Buenos Aires, Argentina.'];



}
