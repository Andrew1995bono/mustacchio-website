import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public tab : string = 'tab1';
  public tab1 : string = '';
  public tab2 : string = '';
  public tab3 : string = '';
  public tab4 : string = '';
  public tab5 : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(number: number):void {
    switch (number) {
      case 1:
        this.tab = 'tab1';
        break;
      case 2:
        this.tab = 'tab2';
        break;
      case 3:
        this.tab = 'tab3';
        break;
      case 4:
        this.tab = 'tab4';
        break;
      case 5:
        this.tab = 'tab5';
        break;
    }
  }
}
