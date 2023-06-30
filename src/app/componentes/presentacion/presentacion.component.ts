import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  constructor(private loginService:LoginService){}
  
  private editarNombre:boolean = false;
  private editarSubtitulo:boolean = false;

  private datos:string[] = [
    "Florencia Esposito",
    "Programador Full Stack Developer Jr.",
    "Buenos Aires, Argentina."];

  login(){
    return this.loginService.estaLogueado();
  }

  getDatos(i:number){
    return this.datos[i]
  } 

  setDatos(dato:string,i:number){
    this.datos[i] = dato;
  }

  setSubtitulos(sub1:string, sub2:string){
    if (sub1 != ''){
      this.setDatos(sub1,1)
    };
    if (sub2 != ''){
      this.setDatos(sub2,2)
    };
    this.setEditarSubtitulo()
  }

  setNombre(nombre:string){
    if (nombre != '') {
      this.setDatos(nombre,0);      
    }
    this.setEditarNombre()
  }

  getEditarNombre(){
    return this.editarNombre
  }

  getEditar(N:number){
    if (N === 1){
      return ((this.editarNombre) && (this.login()))
    } else {
      return ((this.editarSubtitulo) && (this.login()))
    }
  }

  setEditarNombre(){
    this.editarNombre = !this.editarNombre
  }

  getEditarSubtitulo(){
    return this.editarSubtitulo
  }

  setEditarSubtitulo(){
    this.editarSubtitulo = !this.editarSubtitulo
  }

}
