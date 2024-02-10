import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id == id)!
  }

  getAllTags():Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
    ]
  }

  getAllFoodsByTag(tag:string):Food[] {
    if (tag == "All") {
      return this.getAll();
    } else {
      return this.getAll().filter(food => food.tags?.includes(tag))
    }
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

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
          origins: ['persia'],
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
