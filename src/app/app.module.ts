import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { LavorazioniComponent } from './lavorazioni/lavorazioni.component';
import { ProduzioneSerramentiComponent } from './produzione-serramenti/produzione-serramenti.component';
import { ProgettiComponent } from './progetti/progetti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChiSiamoComponent,
    LavorazioniComponent,
    ProduzioneSerramentiComponent,
    ProgettiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
