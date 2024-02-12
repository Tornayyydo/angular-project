import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-georgia',
  templateUrl: './georgia.component.html',
  styleUrls: ['./georgia.component.scss']
})
export class GeorgiaComponent {
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
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'],"georgia")
        if(this.foods.length == 0){
          this.noFood = true
        }
      } else if (params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag'],"georgia")
      } else {
        for (let i = 0; i < this.foodService.getAll().length; i++) {
          if (this.foodService.getAll()[i].origins[0] == "georgia") {
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
