import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
      constructor(private loginService:LoginService){}

      Login(){
        return this.loginService.estaLogueado();
      }

      Logout(){
        this.loginService.logout();
      }
}
