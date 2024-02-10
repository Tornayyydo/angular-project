import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

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

  constructor(private foodService: FoodService,
  private route: ActivatedRoute,
  private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.collapsed = true
    setTimeout(() => {
      this.showContent = true;
    }, 0);
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
        if(this.foods.length == 0){
          this.noFood = true
        }
      } else if (params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      } else {
        for (let i = 0; i < this.foodService.getAll().length; i++) {
          if (this.foodService.getAll()[i].origins[0] == "persia") {
            this.foods.push(this.foodService.getAll()[i])
          }
        }
      }
    })
  }

  onClick(food: Food) {
    food.favorite = !food.favorite
  }
}
