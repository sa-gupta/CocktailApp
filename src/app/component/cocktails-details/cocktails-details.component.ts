import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CocktailDbDrink } from 'src/app/model/cocktail-db-drink';
import { CocktailDbResult } from 'src/app/model/cocktail-db-result';
import { Cocktail } from 'src/app/model/cocktail.model';
import { CocktailService } from 'src/app/service/cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  id: any;
  cocktails: Cocktail[];
  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) { 
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getCocktailById(this.id);
    })
    

  }
  public getCocktailById(id: string): void {
    this.cocktailService.getCocktailById(id).subscribe(
      (response: CocktailDbResult) => {
        this.cocktails = response.drinks.map((d: CocktailDbDrink) => this.cocktailService.cocktailDbDrinkToCocktail(d));
        // console.log(this.cocktails);git 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}