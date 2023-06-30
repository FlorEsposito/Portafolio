import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private loginService:LoginService){}

  private editar:boolean = false;
  private proyecto1:string[] = [
    "Portafolio Web 2023",
    "Se trata del diseño de arquitectura de una aplicacion Web distribuida, e interfaz de usuario (front end) utilizando herramientas como las APIs necesarias para proveer a través de internet la información (back end)."
  ]

  login(){
    return this.loginService.estaLogueado();
  }

  getEditar(){
    return ((this.editar)&&(this.login()))
  }

  setEditar(){
    this.editar = !this.editar
  }

  getProyecto(i:number){
    return this.proyecto1[i]
  }

  setProyecto(informacion:string,i:number){
    this.proyecto1[i] = informacion
  }

  setDatos(titulo:string,informacion:string){
    if (titulo != ""){
      this.setProyecto(titulo,0)
    }
    if (informacion != ""){
      this.setProyecto(informacion,1)
    }
    this.setEditar()
  }
}
