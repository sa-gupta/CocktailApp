import { CocktailDbResult } from '../../model/cocktail-db-result';
import { CocktailDbDrink } from '../../model/cocktail-db-drink';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from '../../model/cocktail.model';
import { CocktailService } from '../../service/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[];
  alpha:any;
  alphabets:any = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"
  ]

  constructor(private cocktailService: CocktailService,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.alpha = params.get('alpha');
    })
    this.getCocktails(this.alpha);
    
  }

  public getCocktails(letter: string): void {
    this.cocktailService.getCocktailDbResult(letter).subscribe(
      (response: CocktailDbResult) => {
        this.cocktails = response.drinks.map((d: CocktailDbDrink) => this.cocktailService.cocktailDbDrinkToCocktail(d));
        // console.log(this.cocktails);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  listRoute(alphabet: string){
    this.router.navigate([
      '/list/'+alphabet
    ]).then(() => {
      window.location.reload();
    });
  }
}

