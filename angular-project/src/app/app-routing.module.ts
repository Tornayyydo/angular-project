import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shell/home/home.component';
import { FoodPageComponent } from './shell/food-page/food-page.component';
import { CartPageComponent } from './shell/cart-page/cart-page.component';
import { LoginComponent } from './shell/login/login.component';
import { RegisterComponent } from './shell/register/register.component';
import { GeorgiaComponent } from './shell/countries/georgia/georgia.component';
import { FranceComponent } from './shell/countries/france/france.component';
import { AmericaComponent } from './shell/countries/america/america.component';
import { IndiaComponent } from './shell/countries/india/india.component';
import { ItalyComponent } from './shell/countries/italy/italy.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'country/georgia', component: GeorgiaComponent},
  { path: 'country/france', component: FranceComponent},
  { path: 'country/america', component: AmericaComponent},
  { path: 'country/india', component: IndiaComponent},
  { path: 'country/italy', component: ItalyComponent},



  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
