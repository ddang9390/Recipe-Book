import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes(): Observable<Object>{
    return this.http.put('https://ng-recipe-book-a6367.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
}
