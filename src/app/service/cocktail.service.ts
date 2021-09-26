import { Injectable } from '@angular/core';
import { CocktailDbDrink } from '../model/cocktail-db-drink';

import { Cocktail } from '../model/cocktail.model';
import { HttpClient } from "@angular/common/http";
import { CocktailDbResult } from '../model/cocktail-db-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  static baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
  static urlForId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
  constructor(private http: HttpClient) { }


  getCocktailDbResult(letter: string): Observable<CocktailDbResult> {
    return this.http.get<CocktailDbResult>(CocktailService.baseUrl + letter);
  }

  getCocktailById(id: string): Observable<CocktailDbResult>{
    return this.http.get<CocktailDbResult>(CocktailService.urlForId + id);
  }

  public cocktailDbDrinkToCocktail(d: CocktailDbDrink): Cocktail {
    let drink: Cocktail = {
      id: d.idDrink,
      alcoholic: d.strAlcoholic,
      category: d.strCategory,
      name: d.strDrink,
      imgUrl: d.strDrinkThumb,
      glass: d.strGlass,
      instruction: d.strInstructions,
      ingredients: this.getIngredients(d)
    };
    return drink;
  }

  public getIngredients(d: CocktailDbDrink): string[] {
    let ingredients: string[] = [];
    if (d.strIngredient1 != null && d.strIngredient1 != "")
      ingredients.push(d.strIngredient1);
    else
      return ingredients;
    if (d.strIngredient2 != null && d.strIngredient2 != "")
      ingredients.push(d.strIngredient2);
    else
      return ingredients;
    if (d.strIngredient3 != null && d.strIngredient3 != "")
      ingredients.push(d.strIngredient3);
    else
      return ingredients;
    if (d.strIngredient4 != null && d.strIngredient4 != "")
      ingredients.push(d.strIngredient4);
    else
      return ingredients;
    if (d.strIngredient5 != null && d.strIngredient5 != "")
      ingredients.push(d.strIngredient5);
    else
      return ingredients;
    if (d.strIngredient6 != null && d.strIngredient6 != "")
      ingredients.push(d.strIngredient6);
    else
      return ingredients;
    if (d.strIngredient7 != null && d.strIngredient7 != "")
      ingredients.push(d.strIngredient7);
    else
      return ingredients;
    if (d.strIngredient8 != null && d.strIngredient8 != "")
      ingredients.push(d.strIngredient8);
    else
      return ingredients;
    if (d.strIngredient9 != null && d.strIngredient9 != "")
      ingredients.push(d.strIngredient9);
    else
      return ingredients;
    if (d.strIngredient10 != null && d.strIngredient10 != "")
      ingredients.push(d.strIngredient10);
    else
      return ingredients;
    if (d.strIngredient11 != null && d.strIngredient11 != "")
      ingredients.push(d.strIngredient11);
    else
      return ingredients;
    if (d.strIngredient12 != null && d.strIngredient12 != "")
      ingredients.push(d.strIngredient12);
    else
      return ingredients;
    if (d.strIngredient13 != null && d.strIngredient13 != "")
      ingredients.push(d.strIngredient13);
    else
      return ingredients;
    if (d.strIngredient14 != null && d.strIngredient14 != "")
      ingredients.push(d.strIngredient14);
    else
      return ingredients;
    if (d.strIngredient15 != null && d.strIngredient15 != "")
      ingredients.push(d.strIngredient15);
    else
      return ingredients;

    return ingredients;
  }
}
