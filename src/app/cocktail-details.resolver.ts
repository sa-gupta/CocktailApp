import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CocktailDbResult } from './model/cocktail-db-result';
import { CocktailService } from './service/cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailDetailsResolver implements Resolve<Observable<CocktailDbResult>> {

  constructor(private cocktailService: CocktailService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CocktailDbResult> {
    const id = route.paramMap.get('id');
    return this.cocktailService.getCocktailById(id);
  }
}
