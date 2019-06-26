import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LugaresService {
 constructor(private aFDB: AngularFireDatabase, private http: HttpClient) {

 }

  public guardarPersona(persona) {
    console.log(persona);
    this.aFDB.database.ref('personas/'+persona.id).set(persona)
    
  }

  public getPersonas() {
    return this.aFDB.list('personas/').valueChanges();
  }

 public obtenerGeoData(direccion) {
   return this.http.get('https://maps.google.com/maps/api/geocode/json?key=AIzaSyAWcCRVsUSrRkoQL43sUqdTjf1NVV3RxM4&address='+direccion)
 }
}
