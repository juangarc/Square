import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',

})
export class CrearComponent  {
  persona:any = {};
  constructor(private lugaresService: LugaresService) {

  }
  guardarPersona(){
    this.persona.id = Date.now()
    this.lugaresService.guardarPersona(this.persona)
  }

}
