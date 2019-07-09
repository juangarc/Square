import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://square-1b0d0.firebaseio.com'
 constructor(private aFDB: AngularFireDatabase, private http: HttpClient) {

 }

  public guardarPersona(persona) {
    //console.log(persona);
    //this.aFDB.database.ref('personas/'+persona.id).set(persona)
    const headers = new Headers({"Content-Type":"application/json"});
    return this.http.post(this.API_ENDPOINT+'/personas.json', persona, {headers:new HttpHeaders({ 'Content-Type':'application/json'})})
    .subscribe()
    
  }

  public editarPersona(persona) {
    console.log(persona);
    this.aFDB.database.ref('personas/'+persona.id).set(persona)
    
  }

  public getPersonas() {
    return this.aFDB.list('personas/').valueChanges();
  }

 public obtenerGeoData(direccion) {
   return this.http.get('https://maps.google.com/maps/api/geocode/json?key=AIzaSyAWcCRVsUSrRkoQL43sUqdTjf1NVV3RxM4&address='+direccion)
 }

 public getPersona(id) {
  return this.aFDB.object('personas/'+id).valueChanges()
 }
}
