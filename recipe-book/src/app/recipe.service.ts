import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { ShoppingListService } from './shopping-list.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

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
}
