import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../services/features.services';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styleUrls: ['./pokemain.component.scss'],
  providers: [ FeaturesService ] 
})

export class PokemainComponent implements OnInit {

  public feature_list: Array<string>;
  public feature_a_guardar: string;

  constructor(  
  
    private _featuresService: FeaturesService

  ){}

  ngOnInit() {
    this.feature_list = this._featuresService.getFeatures();
  }

  agregarCarac() {
    this._featuresService.addFeature(this.feature_a_guardar);
    this.feature_a_guardar = null;
  }

}
