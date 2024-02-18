import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-georgia',
  templateUrl: './search-georgia.component.html',
  styleUrls: ['./search-georgia.component.scss']
})
export class SearchGeorgiaComponent {
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
      this.router.navigateByUrl('/country/georgia/search/' + this.searchTerm)
    }
  }

  clear():void {
      this.router.navigateByUrl('/country/georgia/search/');
  }
}
