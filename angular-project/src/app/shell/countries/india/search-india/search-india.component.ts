import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-india',
  templateUrl: './search-india.component.html',
  styleUrls: ['./search-india.component.scss']
})
export class SearchIndiaComponent {
  searchTerm:String = ''
  searchMode:Boolean = false;

  constructor(private route: ActivatedRoute,
     private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.searchMode = true
      }
      this.searchTerm = params['searchTerm']
    })
  }

  search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/country/india/search/' + this.searchTerm)
    }
  }

  clear():void {
      this.router.navigateByUrl('/country/india/search/');
  }
}
