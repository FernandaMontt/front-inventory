import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidena',
  templateUrl: './sidena.component.html',
  styleUrls: ['./sidena.component.css']
})
export class SidenaComponent implements OnInit {

  mobileQuery: MediaQueryList;

  menuNav = [
    {name:"Home", route:"home", icon: "home"},
    {name:"Categorias", route:"category", icon: "category"},
    {name:"Productos", route:"product", icon: "production_quantity_limits"}
  ]

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  shouldRun = true;
  
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

}
