import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  // esto lo da corsico en min 48
  
  
  constructor(//private autenticacionServicio: AutenticacionService, private rutas:Router
  ){} 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  //canActivate(
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//let currentUser = this.autenticacionServicio.usuarioAutenticado
//if (currentUser && currentUser.accessToken) {
//    return true;
 // }
 // else {
  //  this.rutas.navigate (['/iniciar-sesion']);
  //  return false;
  
//}
//}
}