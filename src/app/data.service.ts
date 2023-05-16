import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarDatos(datos:string[]){
        this.httpClient.post('https://portafolio-web-411d6-default-rtdb.firebaseio.com/datos.json',datos).subscribe(
            response => console.log("Guardado correctamente"),
            error => console.log("Error"),
        );
    }

}