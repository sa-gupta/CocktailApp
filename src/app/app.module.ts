import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './component/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './component/cocktails-details/cocktails-details.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { CocktailDetailsResolver } from './cocktail-details.resolver';


const routes = [
  {
    path:'list/:alpha',
    component: CocktailsListComponent
  },
  {
    path:'cocktail-details/:id',
    component: CocktailsDetailsComponent,
    resolve: {
      cocktailDBResult: CocktailDetailsResolver
    }
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'list'
  },
  {
    path:'**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
