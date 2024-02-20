import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-italy',
  templateUrl: './search-italy.component.html',
  styleUrls: ['./search-italy.component.scss'],
})
export class SearchItalyComponent {
  searchTerm: String = '';
  searchMode: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.searchMode = true;
      }
      this.searchTerm = params['searchTerm'];
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.router.navigateByUrl('/country/italy/search/' + this.searchTerm);
    }
  }

  clear(): void {
    this.router.navigateByUrl('/country/italy/search/');
  }
}
