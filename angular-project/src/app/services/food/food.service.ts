import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
        {
          id: 1,
          name: 'Pizza Pepperoni',
          cookTime: '10-20',
          price: 10,
          favorite: false,
          origins: ['italy'],
          stars: 4.5,
          imageUrl: '../assets/images/pizza.jpg',
          tags: ['FastFood', 'Pizza', 'Lunch'],
        },
        {
          id: 2,
          name: 'Meatball',
          price: 20,
          cookTime: '20-30',
          favorite: true,
          origins: ['persia'],
          stars: 4.7,
          imageUrl: '../assets/images/meatball.jpg',
          tags: ['SlowFood', 'Lunch'],
        },
        {
          id: 3,
          name: 'Hamburger',
          price: 5,
          cookTime: '10-15',
          favorite: false,
          origins: ['germany'],
          stars: 3.5,
          imageUrl: '../assets/images/burger.webp',
          tags: ['FastFood', 'Hamburger'],
        },
        {
          id: 4,
          name: 'Fried Potatoes',
          price: 2,
          cookTime: '15-20',
          favorite: true,
          origins: ['belgium'],
          stars: 3.3,
          imageUrl: '../assets/images/potatoes.jpg',
          tags: ['FastFood', 'Fry'],
        }
    ]
  }
}
