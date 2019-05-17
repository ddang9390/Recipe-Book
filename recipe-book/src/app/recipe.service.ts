import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe("test", 
      "this is a test", 
      "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
      [new Ingredient("meat",27)])
  ];

  constructor() { }

  getRecipes(){
    //returns array that's a copy of recipes
    return this.recipes.slice();
  }
}
