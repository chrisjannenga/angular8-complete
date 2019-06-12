import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Pasta w/ Red Sauce',
      'This is a yummy looking pasta dish',
      'https://www.budgetbytes.com/wp-content/uploads/2018/04/The-Best-Weeknight-Pasta-Sauce-plate-H1.jpg',
      [
        new Ingredient('Box of noodles', 1),
        new Ingredient('Tomatoes', 12),
        new Ingredient('Basil Leaves', 5)
      ]),
    new Recipe(
      1,
      'Bacon Cheeseburger',
      'A crisp and refreshing bacon cheeseburger',
      'https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/the-ultimate-bacon-cheeseburgers-2-600x458.jpg',
      [
        new Ingredient('Egg bun', 1),
        new Ingredient('Slices of bacon', 4),
        new Ingredient('Mild Cheddar Slices', 2)
      ])
  ];

    getRecipes() {
      return [...this.recipes];
    }

    getRecipeById(id: number) {
       const result = this.recipes.find(recipe => {
          return id === recipe.id;
       });

       return result;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
  constructor(private shoppingListService: ShoppingListService) { }
}
