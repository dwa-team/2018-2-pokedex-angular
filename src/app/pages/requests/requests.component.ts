import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service'
import { Router } from '@angular/router';

@Component({
  selector: 'page-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.sass'],
  providers: [ JsonPlaceholderService ]
})
export class RequestsComponent implements OnInit {

  public listUsers:Array<any>;

  constructor(
    private _JsonPlaceholderService:JsonPlaceholderService,
    private _route:Router
  ) { }

  ngOnInit() {
    this._JsonPlaceholderService.getUsers().subscribe(
      result => this.listUsers = result,
      error => console.log("An error has ocurred," + error )
    );
  }

  goToHome() {
    this._route.navigate(['/home']);
  }

}
