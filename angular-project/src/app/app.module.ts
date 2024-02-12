import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { HomeComponent } from './shell/home/home.component';
import { StarRatingComponent } from './shell/partials/star-rating/star-rating.component';
import { SearchComponent } from './shell/home/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './shell/home/tags/tags.component';
import { FoodPageComponent } from './shell/food-page/food-page.component';
import { CartPageComponent } from './shell/cart-page/cart-page.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { LoginComponent } from './shell/login/login.component';
import { RegisterComponent } from './shell/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shell/footer/footer.component';
import { GeorgiaComponent } from './shell/countries/georgia/georgia.component';
import { FranceComponent } from './shell/countries/france/france.component';
import { AmericaComponent } from './shell/countries/america/america.component';
import { IndiaComponent } from './shell/countries/india/india.component';
import { ItalyComponent } from './shell/countries/italy/italy.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    GeorgiaComponent,
    FranceComponent,
    AmericaComponent,
    IndiaComponent,
    ItalyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
