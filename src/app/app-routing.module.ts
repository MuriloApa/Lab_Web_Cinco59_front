import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CitiesListComponent } from './pages/cities/cities-list/cities-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cidades', component: CitiesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
