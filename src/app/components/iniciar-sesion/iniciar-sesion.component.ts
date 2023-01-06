import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  

  // corsico 1 min 14.35
  constructor(private formBuilder:FormBuilder, private autenticacionService: AutenticacionService, private ruta: Router) { 

  
    this.form = this.formBuilder.group(
        { 
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
            deviveId:["17867868768"],
            deviceType:["DEVICE_TYPE_ANDROID"],
            notificationToken:["123456789"]
           })
        })
    }

          // ver corsico ^ min 15.57

          // fin  corsico 1 min 17.50




    ngOnInit(): void {
    }
// corsico 2 min 18
    get Email()
    {
      return this.form.get('email');
    }

    get Password()
    {
      return this.form.get('password');
    }

    // fin corsico 2 min 19.30 

    // corsico 3 min 33

    onEnviar(event:Event){
      event.preventDefault;
      this.autenticacionService.iniciarSession(this.form.value).subscribe(data=>{
        console.log("DATA:" + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      })
    }
     // fin corsico 3 min 35.3

}  