import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { provideHttpClient } from '@angular/common/http';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PeopleItemComponent } from './components/people-item/people-item.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    PeopleListComponent,
    MenuComponent,
    PageNotFoundComponent,
    PeopleItemComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
