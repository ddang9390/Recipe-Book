import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from './shopping-list.service';
import { DataStorageService } from './data-storage.service';
import * as firebase from 'firebase';
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
      apiKey: 'AIzaSyC6A3pyWLbR-gP6QutgcQRsZG6CBdz7sgg',
      authDomain: 'ng-recipe-book-a6367'
    });
  }
}
