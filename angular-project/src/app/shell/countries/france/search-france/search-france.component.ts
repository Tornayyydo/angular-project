import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-france',
  templateUrl: './search-france.component.html',
  styleUrls: ['./search-france.component.scss'],
})
export class SearchFranceComponent {
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
      this.router.navigateByUrl('/country/france/search/' + this.searchTerm);
    }
  }

  clear(): void {
    this.router.navigateByUrl('/country/france/search/');
  }
}
