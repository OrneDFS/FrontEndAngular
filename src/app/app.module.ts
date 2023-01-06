import { NgModule, resolveForwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { GraciaComponent } from './components/gracia/gracia.component';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    FormacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ContactoComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    LoadingComponent,
    GraciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  // corsico min 42
  providers: [PortfolioService,
    {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
