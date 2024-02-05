import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!:Food;

  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.food = foodService.getFoodById(params['id'])
      }
    })
  }

  onClick(food: Food) {
    food.favorite = !food.favorite
  }
}
