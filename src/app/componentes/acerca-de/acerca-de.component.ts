import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/componentes/login/login.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  constructor(private loginComponent:LoginComponent){}
  login:boolean = this.loginComponent.getHabilitar()
}
