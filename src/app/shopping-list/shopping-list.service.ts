import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Bacon', 2)
  ];

  constructor() { }

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit([...ingredients]);
  }
}
