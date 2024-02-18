import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
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
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }

  clear():void {
    this.router.navigateByUrl('/search/');
  }
}
