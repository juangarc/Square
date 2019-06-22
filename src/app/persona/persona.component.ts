import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {
  personas = null;

  constructor(private lugaresService: LugaresService) {
    lugaresService.getPersonas().subscribe(personas =>{  
      this.personas = personas;
    });
   }
}
