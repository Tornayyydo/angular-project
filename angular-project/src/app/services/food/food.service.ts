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
      { name: 'All', count: 30 },
      { name: 'FastFood', count: 3 },
      { name: 'Comfort', count: 8 },
      { name: 'Lunch', count: 3 },
      { name: 'Snack', count: 2 },
      { name: 'Pastry', count: 2 },
      { name: 'Dessert', count: 5 },
      { name: 'Exotic', count: 2 },
      { name: 'Fried', count: 5 },
    ]
  }

  getAllFoodsByTagHome(tag:string):Food[] {
    if (tag == "All") {
     return this.getAll()
    } else {
      return this.getAll().filter(food => food.tags?.includes(tag))
    }
  }

  getAllFoodsByTag(tag:string,country:string):Food[] {
    const countryArray = []
    for (let i = 0; i < this.getAll().length; i++) {
      if (this.getAll()[i].origins[0] == country) {
        countryArray.push(this.getAll()[i])
      }
    }
    if (tag == "All") {
      return countryArray;
    } else {
      return countryArray.filter(food => food.tags?.includes(tag))
    }
  }

  getAllFoodsBySearchTermHome(searchTerm:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllFoodsBySearchTerm(searchTerm:string, country: string):Food[]{
    const countryArray = []
    for (let i = 0; i < this.getAll().length; i++) {
      if (this.getAll()[i].origins[0] == country) {
        countryArray.push(this.getAll()[i])
      }
    }
    return countryArray.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  foodData = [
    {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4,
      imageUrl: '../assets/images/pizza.jpg',
      tags: ['FastFood'],
    },
    {
      id: 2,
      name: 'Risotto',
      cookTime: '20-30',
      price: 16,
      favorite: false,
      origins: ['italy'],
      stars: 3,
      imageUrl: '../assets/images/risotto.jpg',
      tags: ['Lunch'],
    },
    {
      id: 3,
      name: 'Pasta',
      price: 12,
      cookTime: '10-15',
      favorite: false,
      origins: ['italy'],
      stars: 5,
      imageUrl: '../assets/images/pasta.jpeg',
      tags: ['Comfort'],
    },
    {
      id: 4,
      name: 'Bruschetta',
      price: 9,
      cookTime: '10-15',
      favorite: false,
      origins: ['italy'],
      stars: 3,
      imageUrl: '../assets/images/bruschetta.jpg',
      tags: ['Snack'],
    },
    {
      id: 5,
      name: 'Ravioli',
      price: 14,
      cookTime: '5-8',
      favorite: false,
      origins: ['italy'],
      stars: 4,
      imageUrl: '../assets/images/ravioli.jpg',
      tags: ['Comfort'],
    },
    {
      id: 6,
      name: 'Tiramisu',
      price: 8,
      cookTime: '20-30',
      favorite: false,
      origins: ['italy'],
      stars: 5,
      imageUrl: '../assets/images/Tiramisu.webp',
      tags: ['Dessert'],
    },
    {
      id: 7,
      name: 'Khinkali',
      price: 1,
      cookTime: '10-15',
      favorite: false,
      origins: ['georgia'],
      stars: 4,
      imageUrl: '../assets/images/khinkali.webp',
      tags: ['Comfort'],
    },
    {
      id: 8,
      name: 'Khachapuri',
      price: 8,
      cookTime: '30-40',
      favorite: false,
      origins: ['georgia'],
      stars: 3,
      imageUrl: '../assets/images/Khachapuri.webp',
      tags: ['Pastry'],
    },
    {
      id: 9,
      name: 'Lobiani',
      price: 5,
      cookTime: '30-40',
      favorite: false,
      origins: ['georgia'],
      stars: 5,
      imageUrl: '../assets/images/lobiani.webp',
      tags: ['Pastry'],
    },
    {
      id: 10,
      name: 'Kharcho',
      price: 12,
      cookTime: '50-60',
      favorite: false,
      origins: ['georgia'],
      stars: 4,
      imageUrl: '../assets/images/kharcho.jpg',
      tags: ['Comfort'],
    },
    {
      id: 11,
      name: 'Mtsvadi',
      price: 10,
      cookTime: '30-40',
      favorite: false,
      origins: ['georgia'],
      stars: 4,
      imageUrl: '../assets/images/mtsvadi.webp',
      tags: ['Fried'],
    },
    {
      id: 12,
      name: 'Churchkhela',
      price: 3,
      cookTime: '1-2 hrs',
      favorite: false,
      origins: ['georgia'],
      stars: 5,
      imageUrl: '../assets/images/Churchkhela.jpg',
      tags: ['Dessert'],
    },
    {
      id: 13,
      name: 'Hotdogs',
      price: 3,
      cookTime: '5-10',
      favorite: false,
      origins: ['america'],
      stars: 4,
      imageUrl: '../assets/images/hotdogs.webp',
      tags: ['FastFood'],
    },
    {
      id: 14,
      name: 'Burger',
      price: 8,
      cookTime: '10-15',
      favorite: false,
      origins: ['america'],
      stars: 3,
      imageUrl: '../assets/images/burger.webp',
      tags: ['FastFood'],
    },
    {
      id: 15,
      name: 'Texas BBQ',
      price: 25,
      cookTime: '4-16 hrs',
      favorite: false,
      origins: ['america'],
      stars: 5,
      imageUrl: '../assets/images/texas-bbq.jpg',
      tags: ['Fried'],
    },
    {
      id: 16,
      name: 'Spicy Wings',
      price: 8,
      cookTime: '30-40',
      favorite: false,
      origins: ['america'],
      stars: 4,
      imageUrl: '../assets/images/wings.jpg',
      tags: ['Fried'],
    },
    {
      id: 17,
      name: 'Mac and Cheese',
      price: 7,
      cookTime: '20-30',
      favorite: false,
      origins: ['america'],
      stars: 3,
      imageUrl: '../assets/images/mac-and-cheese.jpg',
      tags: ['Comfort'],
    },
    {
      id: 18,
      name: 'Donuts',
      price: 2,
      cookTime: '10-15',
      favorite: false,
      origins: ['america'],
      stars: 5,
      imageUrl: '../assets/images/donuts.webp',
      tags: ['Dessert'],
    },
    {
      id: 19,
      name: 'Biryani',
      price: 12,
      cookTime: '1-2 hrs',
      favorite: false,
      origins: ['india'],
      stars: 4,
      imageUrl: '../assets/images/biryani.jpg',
      tags: ['Comfort'],
    },
    {
      id: 20,
      name: 'Curry',
      price: 10,
      cookTime: '30-45',
      favorite: false,
      origins: ['india'],
      stars: 3,
      imageUrl: '../assets/images/curry.jpg',
      tags: ['Lunch'],
    },
    {
      id: 21,
      name: 'Butter Chicken',
      price: 15,
      cookTime: '45-60',
      favorite: false,
      origins: ['india'],
      stars: 5,
      imageUrl: '../assets/images/Butter-chicken.webp',
      tags: ['Comfort'],
    },
    {
      id: 22,
      name: 'Samosas',
      price: 2,
      cookTime: '20-30',
      favorite: false,
      origins: ['india'],
      stars: 4,
      imageUrl: '../assets/images/samosas.jpg',
      tags: ['Snack'],
    },
    {
      id: 23,
      name: 'Malai Kofta',
      price: 14,
      cookTime: '45-60',
      favorite: false,
      origins: ['india'],
      stars: 3,
      imageUrl: '../assets/images/malai-kofta.webp',
      tags: ['Fried'],
    },
    {
      id: 24,
      name: 'Jalebi',
      price: 7,
      cookTime: '30-45',
      favorite: false,
      origins: ['india'],
      stars: 4,
      imageUrl: '../assets/images/jalebi.jpg',
      tags: ['Dessert'],
    },
    {
      id: 25,
      name: 'Ratatouille',
      price: 10,
      cookTime: '45-60',
      favorite: false,
      origins: ['france'],
      stars: 3,
      imageUrl: '../assets/images/ratatouille.webp',
      tags: ['Lunch'],
    },
    {
      id: 26,
      name: 'Foie Gras',
      price: 50,
      cookTime: '5-10',
      favorite: false,
      origins: ['france'],
      stars: 5,
      imageUrl: '../assets/images/foie-gras.jpg',
      tags: ['Fried'],
    },
    {
      id: 27,
      name: 'Escargot',
      price: 15,
      cookTime: '10-15',
      favorite: false,
      origins: ['france'],
      stars: 4,
      imageUrl: '../assets/images/escargot.webp',
      tags: ['Exotic'],
    },
    {
      id: 28,
      name: 'Steak Tartare',
      price: 20,
      cookTime: '10-15',
      favorite: false,
      origins: ['france'],
      stars: 3,
      imageUrl: '../assets/images/steak-tartare.jpg',
      tags: ['Exotic'],
    },
    {
      id: 29,
      name: 'Onion Soup',
      price: 10,
      cookTime: '45-60',
      favorite: false,
      origins: ['france'],
      stars: 4,
      imageUrl: '../assets/images/onion-soup.jpg',
      tags: ['Comfort'],
    },
    {
      id: 30,
      name: 'Chocolate Souffle',
      price: 9,
      cookTime: '20-25',
      favorite: false,
      origins: ['france'],
      stars: 5,
      imageUrl: '../assets/images/chocolate-souffle.webp',
      tags: ['Dessert'],
    },
]

  getAll():Food[]{
    return this.foodData
  }
}
