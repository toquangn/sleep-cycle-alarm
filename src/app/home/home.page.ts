import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  time_array: any = []
  constructor() {}

  calculateTime() {
    this.time_array = [];
    for (let i = 0; i < 7; i++){
      this.time_array.push(moment().add(1.5*(i+1),'hours').format('LT'))
    }
    console.log(this.time_array)
  }
}
