import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  datosMiPersona: any="";
  modificable: boolean=false;
  logueado: boolean=this.auth.logIn;

  constructor(private datosPortfolio:PortfolioService, private auth:AutenticacionService) { }

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
