import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  bonjour : string | undefined;
  constructor(){}

  ngOnInit(): void {
    this.bonjour = "toto";
  }
}
