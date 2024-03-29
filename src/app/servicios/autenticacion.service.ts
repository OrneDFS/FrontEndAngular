import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// corsico 1 --  28 min hasta 33

export class AutenticacionService {
url="https://ornedesfs.onrender.com/auth"; // modificar despues con la url real 

currentUsersubject: BehaviorSubject<any>;

constructor(private http:HttpClient, private router:Router) {

    this.currentUsersubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  iniciarSession(credenciales:any): Observable<any> {
    return this.http.post(this.url + "/login", credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUsersubject.next(data);
      return data;
    }))
  }

  // corsico 1 --  28 min hasta 33
  logOut(): void {
 sessionStorage.removeItem("currentUser");
 this.router.navigate(['/']);
    location.reload();
  }

  // Servicio para verificar inicio de sesion - ARI
  public get logIn(): boolean{
    return (sessionStorage.getItem('currentUser')!==null)
  } 

  //corsico 2 - min 40.25

  get usuarioAutenticado (){
    return this.currentUsersubject.value;
  }

}
