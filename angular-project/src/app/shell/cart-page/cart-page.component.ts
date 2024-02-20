import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(
    private cartService: CartService,
    private foodService: FoodService,
    private sidebarService: SidebarService,
    private authService: AuthService
  ) {
    this.setCart();
  }
  num: number = 1;
  zero: string = 'material-symbols-outlined zero';

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
    this.sidebarService.collapsed = true;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: number) {
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  remove(cartItem: CartItem) {
    if (this.num == 2) {
      this.zero = 'material-symbols-outlined zero';
      this.num--;
    } else if (this.num == 1) {
      this.zero = 'material-symbols-outlined zero';
    } else {
      this.num--;
    }
    this.changeQuantity(cartItem, this.num);
  }

  add(cartItem: CartItem) {
    this.num++;
    this.zero = 'material-symbols-outlined';
    this.changeQuantity(cartItem, this.num);
  }
}
