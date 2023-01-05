import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  datosProyectos:any="";
  modificable: boolean[]=[];
  logueado: boolean=false;
  proyectos:any= {
 
    "id": 1,
    "titulo": "Este Portafolio Web",
    "descripcion": "lalalalal",
    "urlProy": "https://zaraza.com",
    "persona": {
            "id": 4
            }
          }
    constructor(private datosPortfolio:PortfolioService) { }

    ngOnInit(): void {
    this.datosPortfolio.verProyecto().subscribe(data=>{
      this.datosProyectos = data;
      console.log(this.datosProyectos);
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


  }

 

