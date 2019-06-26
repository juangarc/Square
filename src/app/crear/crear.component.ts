import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { ResponseGeoApi } from '../response-geo-api';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',

})
export class CrearComponent  {
  persona:any = {};
  constructor(private lugaresService: LugaresService) {

  }
  guardarPersona(){
    var direccion = this.persona.direccion+','+this.persona.ciudad+','+this.persona.pais;
    this.lugaresService.obtenerGeoData(direccion)
    .subscribe((result:any) => {
      console.log(result);
      
      this.persona.lat = result.results[0].geometry.location.lat;
      this.persona.lng = result.results[0].geometry.location.lng;

      this.persona.id = Date.now()
      this.lugaresService.guardarPersona(this.persona)
      alert('Persona añadida con éxito');
      this.persona = {}
    });
  }

}
