import { Component, OnInit } from '@angular/core';
import { fade } from './../../animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ fade ] 
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
