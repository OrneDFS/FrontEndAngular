import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url=""; // modificar despues con la url real 

currentUsersubject: BehaviorSubject<any>;

constructor(private http:HttpClient, private router:Router) {

    console.log("[] servicio de autenticacion corriendo...");
    this.currentUsersubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  iniciarSession(credenciales:any): Observable<any> {
    console.log("[] servicio de autenticacion corriendo mas...");
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      return data;
    }))
  }

  logOut(): void {
 sessionStorage.removeItem("currentUser");
 this.router.navigate(['/']);
    location.reload();
}

  // Servicio para verificar inicio de sesion
  public get logIn(): boolean{
    return (sessionStorage.getItem('currentUser')!==null)
}


}
