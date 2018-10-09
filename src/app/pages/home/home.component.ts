import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service'

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ JsonPlaceholderService ]
})

export class HomeComponent implements OnInit {

  public listUsers:Array<any>;

  constructor(

    private _JsonPlaceholderService:JsonPlaceholderService

  ) {}

  ngOnInit() {

    this._JsonPlaceholderService.getUsers().subscribe(
      result => this.listUsers = result,
      error => console.log("An error has ocurred," + error )
    );
   
  }

}
