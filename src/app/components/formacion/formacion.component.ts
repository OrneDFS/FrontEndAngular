import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {

  datosFormacion:any="";
  modificable: boolean[]=[];
  logueado: boolean=this.auth.logIn;
  formacion:any={
    "id":1,
    "institucion": "",
    "periodo": "",
    "titulo": "",
    "descripcion": "",
    "enlace": "",
    "persona": {
      "id": 2
      }
        }


  constructor(private datosPortfolio:PortfolioService, private auth:AutenticacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.verEstudio().subscribe(data=>{
      this.datosFormacion = data;
      console.log(this.datosFormacion);
    })
  }

  habilitarEdicion(id :number){
    if(this.modificable[id]===true) {
      this.modificable[id]= false;
    } else {this.modificable[id] = true;
    }
  }
  
  anadir(){
    let nuevo=this.formacion;
    this.datosFormacion.push(this.datosPortfolio.nuevoEstudio(nuevo));
    alert("El Registro fue añadido");
    location.reload();
  }

  modificar(id:number){ 
  for(let formacion of this.datosFormacion){
  if(formacion.id===id){
    this.datosPortfolio.editarEstudio(formacion);
     }
    }
    alert("El registro fue Modificado");
   this.modificable[id]=false;
  }

  eliminar(id:number){
    this.datosPortfolio.eliminarEstudios(id);
    alert("El registro fue eliminado");
    location.reload();
  }
}
