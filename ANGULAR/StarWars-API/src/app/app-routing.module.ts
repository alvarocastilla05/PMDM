import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';

const routes: Routes = [
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'people-detail/:id', component: PeopleDetailComponent},
  {path: '', redirectTo: '/vehicles' , pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
