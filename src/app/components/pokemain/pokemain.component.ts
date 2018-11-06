import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../services/features.service';
import { fade, explode} from './../../animations/animations';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styleUrls: ['./pokemain.component.scss'],
  providers: [ FeaturesService ],
  animations: [ fade, explode ]
})

export class PokemainComponent implements OnInit {

  public feature_list: Array<string>;
  public feature_a_guardar: string;
  
  constructor(  
    private _featuresService: FeaturesService,
  ){
  
  }

  ngOnInit() {
    this.feature_list = this._featuresService.getFeatures();
  }

  agregarCarac() {
    if(this.feature_a_guardar) {
      this._featuresService.addFeature(this.feature_a_guardar);
      this.feature_a_guardar = null;
    }
  }

  eliminarCaract(_index) {
    this._featuresService.deleteFeature(_index);
  }

}
