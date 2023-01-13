import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReconocimientosComponent } from './components/reconocimientos/reconocimientos.component';
// import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: '', component:PortfolioComponent}, // , canActivate: [GuardGuard] sugiere corsico para que la url no sea visible para cualquiera. -- Al ahacerlo no se vio más mi website
  {path: 'portfolio',redirectTo: '',pathMatch: 'full'} , 
  {path: 'iniciar-sesion', component: IniciarSesionComponent },
  {path: 'reconocimientos', component:ReconocimientosComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




