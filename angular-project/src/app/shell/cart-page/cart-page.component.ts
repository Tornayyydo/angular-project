import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  constructor(private cartService: CartService,
     private foodService: FoodService,
     private sidebarService: SidebarService) {
    this.setCart()
  }

  ngOnInit(): void {
    this.sidebarService.collapsed = true
  }

  removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart()
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart()
  }

  setCart(){
    this.cart = this.cartService.getCart()
  }
}