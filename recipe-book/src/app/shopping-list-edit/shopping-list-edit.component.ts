import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') sForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  edittedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditting
      .subscribe(
        (index: number) => {
          this.edittedItemIndex = index;
          this.editMode = true;
          this.edittedItem = this.shoppingListService.getIngredient(index);

          this.sForm.setValue(
            {name: this.edittedItem.name,
            amount: this.edittedItem.amount}
          )
        }
      );
  }

  addIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    
    if(!this.editMode){
      this.shoppingListService.addIngredient(newIngredient);
    }
    else{
      this.shoppingListService.updateIngredient(this.edittedItemIndex, newIngredient);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
