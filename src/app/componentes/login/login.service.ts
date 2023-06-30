import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


@Injectable()
export class LoginService{
    constructor(private router:Router){}

    token:string = '';
    
      login(usuario:string,password:string){
         firebase.auth().signInWithEmailAndPassword(usuario,password).then(
             response =>{ firebase.auth().currentUser?.getIdToken().then(
                 token=>{ 
                     this.token=token;
                 } 
             )}
         )
    } 

    getIdToken():string{
        return this.token
    }

    estaLogueado(){
        return this.token;
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.token="";
        })
    }
}