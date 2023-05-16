import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-hard-ysoft-skills',
  templateUrl: './hard-ysoft-skills.component.html',
  styleUrls: ['./hard-ysoft-skills.component.css']
})
export class HardYSoftSkillsComponent {
  constructor(private loginComponent:LoginComponent){}
  login:boolean = this.loginComponent.getHabilitar()
}
