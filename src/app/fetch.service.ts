import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(public http: HttpClient) { }

  idsUsable = [
    58, 63, 70, 73, 145, 149, 151, 242, 265, 275, 333, 345, 547, 687, 731,
    346, 717, 720, 727
  ]

  arrayPerso: any[] = [];

  random = this.idsUsable[Math.floor(Math.random()* this.idsUsable.length)];
  random2 = this.idsUsable[Math.floor(Math.random()* this.idsUsable.length)];


  async getDataAll() {
    for await (let i of this.idsUsable) {
      this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${i}.json`)
      .subscribe(res => this.arrayPerso.push(res));
    }

  }

  // ------ Appels API Perso 1 ------
  getData() {
    return this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.random}.json`);
  }

  // ------ Appels API Perso 2 ------
  getData2() {
    return this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.random2}.json`);
  }
}
