import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),
      transition('void => *', animate('0.8s ease-in-out')),
    ]),
  ]
})
export class HomeComponent implements OnInit{
  showContent:boolean = false
  foods:Food[] = []
  noFood:boolean = false

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 0);
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        if(this.foods.length == 0){
          this.noFood = true
        }
      } else {
        this.foods = this.foodService.getAll()
      }
    })
  }

  onClick(food: Food) {
    food.favorite = !food.favorite
  }
}
