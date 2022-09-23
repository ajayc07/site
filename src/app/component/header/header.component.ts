import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showOptionPanel = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(componentEl: string) {
    this.showOptionPanel = false;
    const docEl = document.getElementById(componentEl);
    docEl?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
