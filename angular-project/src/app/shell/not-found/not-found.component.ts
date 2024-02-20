import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = true;
  @Input() notFoundMessage: string = 'Page not Found';
  @Input() resetLinkText: string = 'Go To Home';
  @Input() resetLinkRoute: string = '/';

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
