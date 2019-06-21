import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class LugaresService {
 constructor(private aFDB: AngularFireDatabase) {

 }

  public guardarPersona(persona) {
    console.log(persona);
    this.aFDB.database.ref('personas/'+persona.id).set(persona)
    
  }

  public getPersonas() {
    return this.aFDB.list('personas/').valueChanges();
  }
}
