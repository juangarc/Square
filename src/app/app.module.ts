import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directiva';
import { ContarClicksDirective } from './directives/contar/clicks.directive';
import { Route, Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './crear/crear.component';
import { LugaresService } from './lugares.service';
import { PersonaComponent } from './persona/persona.component';
import {HttpClientModule} from '@angular/common/http';


export const firebaseConfig = {
  apiKey: "AIzaSyB1eFeIYeQEQn1c9wHrhZlRR9sl2_5CKkA",
  authDomain: "square-1b0d0.firebaseapp.com",
  databaseURL: "https://square-1b0d0.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "594963094336",
  
};

const appRoutes: Routes =[
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'crear/:id', component: CrearComponent},
  {path: 'persona', component: PersonaComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    CrearComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWcCRVsUSrRkoQL43sUqdTjf1NVV3RxM4'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [LugaresService, AngularFireDatabase],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
