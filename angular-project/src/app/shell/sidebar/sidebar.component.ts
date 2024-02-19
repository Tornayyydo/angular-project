import { Component, ElementRef, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    public sidebarService: SidebarService,
    private elementRef: ElementRef,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  navData = navbarData;

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.cartService.getCart().items = []
    this.authService.logoutUser();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const sidebarElement =
      this.elementRef.nativeElement.querySelector('.sidenav');
    const isClickInsideSidebar =
      sidebarElement && sidebarElement.contains(target);
    const isBelowHeightLimit =
      event.clientY >
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (
      !isClickInsideSidebar &&
      !this.sidebarService.collapsed &&
      isBelowHeightLimit
    ) {
      this.sidebarService.collapsed = true;
    }
  }

  onClicked() {
    this.sidebarService.collapsed = true;
  }
}
