import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { ResponseGeoApi } from '../response-geo-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',

})
export class CrearComponent  {
  persona:any = {};
  id:any = null
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
    if (this.id != 'new') {
      this.lugaresService.getPersona(this.id)
      .subscribe((persona) => {
        this.persona = persona
      });
    }
    
  }
  guardarPersona(){
    var direccion = this.persona.direccion+','+this.persona.ciudad+','+this.persona.pais;
    this.lugaresService.obtenerGeoData(direccion)
    .subscribe((result:any) => {
      console.log(result);
      
      this.persona.lat = result.results[0].geometry.location.lat;
      this.persona.lng = result.results[0].geometry.location.lng;

      if (this.id != 'new') {
        this.lugaresService.editarPersona(this.persona)
        alert('Persona editada con éxito');
      }else {
        this.persona.id = Date.now()
        this.lugaresService.guardarPersona(this.persona)
        alert('Persona añadida con éxito');
      }
      this.persona = {}
    });
  }

}
