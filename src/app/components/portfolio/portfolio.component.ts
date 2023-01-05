import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  loading: boolean= true;

  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.verPersona().subscribe(data => {
    this.loading = false;
    })
  }

}
