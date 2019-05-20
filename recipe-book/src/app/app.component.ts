import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from './data-storage.service';
import * as firebase from 'firebase';

import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService, DataStorageService]
})
export class AppComponent implements OnInit{
  title = 'recipe-book';
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: environment.firebaseApiKey,
      authDomain: environment.firebaseAuthDomain
    });
  }
}
