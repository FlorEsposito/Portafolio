import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  constructor(private loginComponent:LoginComponent){}
  login:boolean = this.loginComponent.getHabilitar()
}
