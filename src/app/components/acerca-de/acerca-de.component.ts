import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  datosMiPersona: any="";
  modificable: boolean=false;
  logueado: boolean=false;


  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.verPersona().subscribe(data=>{
      this.datosMiPersona = data;
      console.log(this.datosMiPersona);
    })
  }

  habilitarEdicion(){
    if(this.modificable) {
      this.modificable = false;
    } else {this.modificable = true;
  }
  }

  modificar(){
    let cambios=this.datosMiPersona;
    this.datosPortfolio.editarPersona(cambios);
    this.modificable = false;
    alert("Dato Modificado");

    }
}
