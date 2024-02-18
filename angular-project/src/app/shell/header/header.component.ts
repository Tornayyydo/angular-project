import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService, private router: Router) {}

  toggleSidebar() {
    this.sidebarService.collapsed = !this.sidebarService.collapsed;
  }

  ScrollToTop(){
    this.router.navigateByUrl('/')
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
