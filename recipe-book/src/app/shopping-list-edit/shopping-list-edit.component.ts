import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(form: NgForm){
    const value = form.value;


    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  
}
