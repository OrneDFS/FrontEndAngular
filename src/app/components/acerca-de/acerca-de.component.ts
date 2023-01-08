import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  datosMiPersona: any="";
  modificable: boolean=false;
  // logueado: boolean=false;
  logueado: boolean =this.auth.logIn;

  // Corsico min 44.50
//miPortfolio: any;
 //falta agregar algo al constructor creo
 // Ver cuerpo del ngOnInit


  constructor(private datosPortfolio:PortfolioService, private auth:AutenticacionService) { }

// Corsico min 44.50 sigue

  // ngOnInit(): void {
  //   this.datosPortfolio.obtenerdatos().subscribe(data=>{
  //     console.log("Datos Personales" + JSON.stringify(data));
  //     this.miPortfolio=data[0];
  //   });
  // }


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
