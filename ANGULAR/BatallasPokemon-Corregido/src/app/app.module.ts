import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BattleComponent } from './pages/battle/battle.component';
import { LottieComponent, LottieDirective, provideLottieOptions } from 'ngx-lottie';
import { ImgPokemonPipe } from './pipes/img-pokemon.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    ImgPokemonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
