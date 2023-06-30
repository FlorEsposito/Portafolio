import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  constructor(private loginService:LoginService){}

  private informacion:string = "Estudiante avanzada de la carrera Licenciatura en Administracion y Contador publico, en la Universidad Nacional de Lujan."
  private editar:boolean = false;

  login(){
    return this.loginService.estaLogueado();
  } 

  getEditar(){
    return (this.editar && this.login())
  }

  cambiarEditar(){
    this.editar = !this.editar
  }

  getInformacion(){
    return this.informacion
  }

  setInformacion(informacion:string){
    this.informacion = informacion
  }

  cambiarInformacion(informacion:string){
    this.setInformacion(informacion);
    this.cambiarEditar()
  }

}
