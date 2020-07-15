import { Component } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class shoppingComponent {
  ingredients: Ingredient [] = [
    new Ingredient('Apple', 5),
    new Ingredient('tomatos', 3)
  ];

};