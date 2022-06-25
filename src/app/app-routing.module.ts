import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'error', component: ShowErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
