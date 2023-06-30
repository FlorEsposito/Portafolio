import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  constructor(private loginService:LoginService){}

  private editar:boolean = false;

  private experiencia1:string[] = [
    "Instituto General Martin Rodriguez",
    "Pasantias Administrativas",
    "Año 2017"
  ];

  getExperiencia(i:number){
    return this.experiencia1[i] 
  }

  setExperiencia(info:string,i:number){
    this.experiencia1[i] = info
  }

  setDatos(dato1:string , dato2:string , dato3:string){
    if (dato1 != ""){
      this.setExperiencia(dato1,0)
    };
    if (dato2 != ""){
      this.setExperiencia(dato2,1)
    };
    if (dato3 != ""){
      this.setExperiencia(dato3,2)
    }
  }

  getEditar(){
    return ((this.editar)&&(this.login()))
  }

  setEditar(){
    this.editar = !this.editar
  }

  login(){
    return this.loginService.estaLogueado();
  }
}
