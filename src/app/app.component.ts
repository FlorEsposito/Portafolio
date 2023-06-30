import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortafolioWeb-Florencia';

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyBqNwmigj7cN3vpiFKq2ntNc8AeJ1_sCMU",
      authDomain: "portafolio-web-411d6.firebaseapp.com"
    })
  }
}
