import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datosExperiencia:any="";
  modificable: boolean[]=[];
  logueado: boolean=false;
  experiencia:any={
      "idTrabajos": 2,
      "empresa": "VNGlobal",
      "periodo": "Año 2022",
      "puesto":"Capa",
      "descripcion":"ads",
      "urlempresa":"https://aafdfsf",
      "persona": {
              "id": 4
              }
  }
  

  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.verTrabajos().subscribe(data => {
      this.datosExperiencia=data;      
    })
  }

  habilitarEdicion(id :number){
    if(this.modificable[id]===true) {
      this.modificable[id]= false;
    } else {this.modificable[id] = true;
  }
  }
  
  anadir(){
    let nuevo=this.experiencia;
    this.datosExperiencia.push(this.datosPortfolio.nuevoTrabajo(nuevo));
    alert("El Registro fue añadido");
    location.reload();
  }

  modificar(id:number){ 
  for(let experiencia of this.datosExperiencia){
  if(experiencia.idTrabajos===id){
    this.datosPortfolio.editarTrabajo(experiencia);
     }
    }
    alert("El registro fue Modificado");
   this.modificable[id]=false;
  }

  eliminar(id:number){
    this.datosPortfolio.eliminarTrabajo(id);
    alert("El registro fue eliminado");
    location.reload();
  }
}
