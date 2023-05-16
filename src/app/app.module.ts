import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardYSoftSkillsComponent } from './componentes/hard-ysoft-skills/hard-ysoft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PieComponent } from './componentes/pie/pie.component';
import { LoginComponent } from './componentes/login/login.component';
import { DataServices } from './data.service';


const appRoutes=[
  {path: 'login', component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardYSoftSkillsComponent,
    ProyectosComponent,
    PieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DataServices,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
