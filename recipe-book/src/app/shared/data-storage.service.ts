import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, 
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes(): Observable<Object>{
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-b02f8.firebaseio.com/recipes.json?auth=' + token, this.recipeService
      .getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken();
    
    this.http.get('https://recipe-book-b02f8.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
