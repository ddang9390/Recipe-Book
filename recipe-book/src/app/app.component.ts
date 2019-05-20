import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from './data-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService, DataStorageService]
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
