import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes : Recipe[] = [
    new Recipe("test", 
      "this is a test", 
      "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
      [new Ingredient("meat",27)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    //returns array that's a copy of recipes
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
