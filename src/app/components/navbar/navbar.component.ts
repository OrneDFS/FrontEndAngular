import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service' ;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  logueado: boolean =this.auth.logIn;

  constructor(private auth:AutenticacionService) { }
 
  ngOnInit(): void {}

  logOut(): void {
    this.auth.logOut();
    location.reload();
  }


}
