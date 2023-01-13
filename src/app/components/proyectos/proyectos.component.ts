import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  datosProyectos:any="";
  modificable: boolean[]=[];
  logueado: boolean=this.auth.logIn;
  proyectos:any= {
 
    "id": "",
    "titulo": "",
    "descripcion": "",
    "urlProy": "",
    "persona": {
            "id": 1
            }
          }
    constructor(private datosPortfolio:PortfolioService, private auth:AutenticacionService) { }

    ngOnInit(): void {
    this.datosPortfolio.verProyecto().subscribe(data=>{
      this.datosProyectos = data;
      this.prepararDatos();
    })
  }

    habilitarEdicion(id: number){
    if(this.modificable[id]===true) {
      this.modificable[id]= false;
    } else {this.modificable[id] = true;
    }
  }
  
  anadir(){
    let nuevo=this.proyectos;
    this.datosProyectos.push(this.datosPortfolio.nuevoProyecto(nuevo));
    alert("El Registro fue añadido");
    location.reload();
  }

  modificar(id:number){ 
  for(let proyectos of this.datosProyectos){
  if(proyectos.id===id){
    this.datosPortfolio.editarProyecto(proyectos);
     }
    }
    alert("El registro fue Modificado");
   this.modificable[id]=false;
  }

  eliminar(id:number){
    this.datosPortfolio.eliminarProyecto(id);
    alert("El registro fue eliminado");
    location.reload();
  }

  prepararDatos() {

    this.datosProyectos[0].descripcion=this.datosProyectos[0].descripcion.split("\n").join("<br />");
 
  }

  }

 

