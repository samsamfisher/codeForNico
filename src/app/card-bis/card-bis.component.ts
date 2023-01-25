import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Perso } from '../models/perso';

@Component({
  selector: 'app-card-bis',
  templateUrl: './card-bis.component.html',
  styleUrls: ['./card-bis.component.scss']
})
export class CardBisComponent {
  constructor(public fetch: FetchService) {}

  datas: any;
  
  ngOnInit(){
    this.fetch.getData2().subscribe(res=>{this.datas=res});
  }

  perso: Perso | undefined;

  getPerso2() {
    this.perso = new Perso(this.datas.powerstats.durability, this.datas.powerstats.speed, this.datas.powerstats.power, this.datas.powerstats.combat, this.datas.images.md)
    console.log(this.perso);
    return this.perso;
  }
  
}
