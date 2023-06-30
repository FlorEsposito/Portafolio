import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-hard-ysoft-skills',
  templateUrl: './hard-ysoft-skills.component.html',
  styleUrls: ['./hard-ysoft-skills.component.css']
})
export class HardYSoftSkillsComponent {
  constructor(private loginService:LoginService){}

  login(){
    return this.loginService.estaLogueado();
  }
}
