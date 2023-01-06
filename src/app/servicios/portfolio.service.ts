import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  url: string = 'http://localhost:8080'; // acá va a ir la url de la API

  constructor( private http:HttpClient) {}

//Vinculación al servidor
  //Metodos Persona 
    verPersona():Observable<any>
      {
      return this.http.get(this.url+"/persona/ver/4");  // revisar esto en el min 38 cuando ponga la API
    }


    editarPersona( persona:any ){
      this.http.put(this.url+"/persona/editar", persona).subscribe();
    }
 
  //Metodos de experiencia

    nuevoTrabajo(trabajo:any){
    this.http.post(this.url+"/trabajos/agregar", trabajo).subscribe();
    }

    verTrabajos():Observable<any>{
      return this.http.get(this.url+"/trabajos/ver");  
    }

    editarTrabajo(trabajo:any){
    this.http.put(this.url+"/trabajos/editar", trabajo).subscribe();
    }

    eliminarTrabajo(id:number){
      this.http.delete(this.url+"/trabajos/eliminar/"+id).subscribe();
    }

  //Metodos de Formacion
    nuevoEstudio(estudio:any){
      this.http.post(this.url+"/estudios/agregar", estudio).subscribe();
      }
  
      verEstudio():Observable<any>{
        return this.http.get(this.url+"/estudios/ver");  
      }
  
      editarEstudio(estudio:any){
      this.http.put(this.url+"/estudios/editar", estudio).subscribe();
      }
  
      eliminarEstudios(id:number){
        this.http.delete(this.url+"/estudios/eliminar/"+id).subscribe();
      }

      //Metodos de Proyectos
      nuevoProyecto(proyecto:any){
      this.http.post(this.url+"/proyectos/agregar", proyecto).subscribe();
      }
  
      verProyecto():Observable<any>{
        return this.http.get(this.url+"/proyectos/ver");  
      }
  
      editarProyecto(proyecto:any){
      this.http.put(this.url+"/proyectos/editar", proyecto).subscribe();
      }
  
      eliminarProyecto(id:number){
        this.http.delete(this.url+"/proyectos/eliminar/"+id).subscribe();
      }

   }

  //  Metodos Navbar

  



