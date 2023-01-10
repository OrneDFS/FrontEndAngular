import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gracia',
  templateUrl: './gracia.component.html',
  styleUrls: ['./gracia.component.css']
})
export class GraciaComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
    mensaje(){
      let si= document.getElementById("question");
      if(si!==null){
      si.innerHTML ="Es una excelente decisión";
    console.log("diste clic en 'si' ")}
  }

   escapismo(){
    let no= document.getElementById("no");
    let randomx= Math.random()*250+"px";
    let randomy= (-100+ Math.random()*250)+"px";

    if(no!==null){

      no.style.position = 'absolute';
      no.style.right = randomx;
      no.style.bottom = randomy;

    console.log(no.style.left)
   }}

   mensaje2(){
   let no= document.getElementById("question");
   if(no!==null){
   no.innerHTML ="¡Espera! piensalo un poco más...";
 console.log("diste clic en 'no' ")}
   
   }
}

