import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent  {
  title = 'App platzisquare';
  //a = 8;
  //b = 2;
  //listo = false;
  //typescript
  //nombre:string = '';
  //apellido = '';
  lugares:any = [
    {id: 1,plan:'pagado' ,cercania: 1, distancia : 1, active: false,nombre: 'Florería La Gardenia'},
    {id: 2,plan: 'gratuito',cercania: 1, distancia : 1.8, active: true,nombre: 'Donas La pasadita'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia : 5, active: true,nombre: 'Veterinaria huella feliz'},
    {id: 4,plan: 'pagado' ,cercania: 3, distancia : 10, active: true,nombre: 'Printers Palmira'},
    {id: 5,plan: 'gratuito',cercania: 3, distancia : 35, active: true,nombre: 'Previser'},
    {id: 6,plan: 'pagado',cercania: 3, distancia : 120, active: true,nombre: 'Fomento'},
  ];
  lat:number = 3.5260943;
  lng:number = -76.3006953;

  constructor(){
 //   setTimeout(() => {
 //     this.listo = true;
  //  }, 3000)
  }

 // hacerAlgo() {
  //  alert('Haciendo algo!')
  //}
}
