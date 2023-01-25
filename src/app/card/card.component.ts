import { Component, inject, Injectable } from '@angular/core';
import { json } from 'body-parser';
import { FetchService } from '../fetch.service';
import { Perso } from '../models/perso';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(public fetch: FetchService) {}

  datas: any;
  allDatas: any;
  ngOnInit(){
    this.fetch.getData().subscribe(res=>{this.datas=res});
  }

  perso: Perso | undefined;

  test() {
    console.log(this.fetch.arrayPerso);
  }

  btn() {
    this.fetch.getDataAll();
  }

  getPerso() {
    this.perso = new Perso(this.datas.powerstats.durability, this.datas.powerstats.speed, this.datas.powerstats.power, this.datas.powerstats.combat, this.datas.images.md)
    console.log(this.perso);
    return this.perso;
  }
  
}
