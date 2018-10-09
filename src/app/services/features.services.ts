import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesService {

    public caracteristicas = ['Num: 001', 'Level: 10', 'Type: Fire', 'Ability: Kamehameha', 'Nickname: Dragoncito']; 

    constructor(){}
    
    addFeature(_nameFeature:string) {
        this.caracteristicas.push(_nameFeature);
        this.getFeatures();
    }

    getFeatures() {
        return this.caracteristicas;
    }

}
