import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  lugares:any = [
    {id: 1,plan:'pagado' ,cercania: 1, distancia : 1, active: false,nombre: 'Florería La Gardenia'},
    {id: 2,plan: 'gratuito',cercania: 1, distancia : 1.8, active: true,nombre: 'Donas La pasadita'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia : 5, active: true,nombre: 'Veterinaria huella feliz'},
    {id: 4,plan: 'pagado' ,cercania: 3, distancia : 10, active: true,nombre: 'Printers Palmira'},
    {id: 5,plan: 'gratuito',cercania: 3, distancia : 35, active: true,nombre: 'Previser'},
    {id: 6,plan: 'pagado',cercania: 3, distancia : 120, active: true,nombre: 'Fomento'},
  ];
  id = null;
  lugar:any= {}
 constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.queryParams)
    //console.log(this.route.snapshot.queryParams['action2'])
    //console.log(this.route.snapshot.queryParams['referer'])
    this.id = this.route.snapshot.params['id']
    this.lugar = this.buscarLugar();
    
 }

 buscarLugar() {
   return this.lugares.filter((lugar) => {return lugar.id == this.id})[0] || null;
 }
}
