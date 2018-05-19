import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  active = 'all';
  menu: any;
  oriental = [{ "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Egg Chinese Combo", "price": 100, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Chicken Chinese Combo", "price": 110, "vegflag": "nonveg" }]
  cc = [{ "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Egg Chinese Combo", "price": 100, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Chicken Chinese Combo", "price": 110, "vegflag": "nonveg" }]
  cs = [{ "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Egg Chinese Combo", "price": 100, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Chicken Chinese Combo", "price": 110, "vegflag": "nonveg" }]
  salads = [{ "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Egg Chinese Combo", "price": 100, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Chicken Chinese Combo", "price": 110, "vegflag": "nonveg" }]
  cart = [
  ];
  constructor(
    private api: ApiService
  ) {
  }
  ngOnInit() {
    this.api.getlist().subscribe(
      (res) => {
        const list = res.json();
        _.forEach(list, element => {
          element.count = 0;
        });
        this.menu = (_.groupBy(list, 'category'));
        this.getfromlocal();
      }
    );
  }

  removecart(key, name) {
    const food = _.find(this.menu[key], f => {
      return f.name === name;
    });
    food.count = food.count + 1;
    let cf = _.find(this.cart, (c) => {
      return food.name === c.name;
    }
    );
    cf ? cf = food : this.cart.push(food);
    this.cart = _.filter(
      this.cart, c => {
        return c.count > 0;
      }
    );
    this.savetolocal();
    console.log(this.cart);
  }
  addcart(key, name) {
    const food = _.find(this.menu[key], f => {
      return f.name === name;
    });
    food.count = food.count ? food.count - 1 : 0;
    let cf = _.find(this.cart, (c) => {
      return food.name === c.name;
    }
    );
    cf ? cf = food : this.cart.push(food);
    this.cart = _.filter(
      this.cart, c => {
        return c.count > 0;
      }
    );
    this.savetolocal();
    console.log(this.cart);
  }

  setfilter(key) {
    this.active = key;
  }

  gettotal() {
    let total = 0;
    _.forEach(
      this.cart, c => {
       total = total + c.count * c.price;
      }
    );
    return total;
  }

  emptycart() {
    this.cart = [];
    this.savetolocal();
    console.log(this.menu);
    for (const key in this.menu) {
      if (this.menu.hasOwnProperty(key)) {
        const element = this.menu[key];
        console.log(element);
        _.forEach(element, food => {
          food.count = 0;
        });
      }
    }
  }

  savetolocal() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getfromlocal() {
    const temp = localStorage.getItem('cart');
    if (temp) {
      this.cart = JSON.parse(temp);
      for (const key in this.menu) {
        if (this.menu.hasOwnProperty(key)) {
          const element = this.menu[key];
          console.log(element);
          _.forEach(element, food => {
            const cf = _.find(this.cart, c => {
              return c.name === food.name;
            });
            console.log(cf);
            food.count = cf ? cf.count : 0;
          });
        }
      }
    }
  }

  checkavailable(key, name) {
    const food = _.find(this.menu[key], f => {
      return f.name === name;
    });
    const d = new Date(),
      h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
      m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      const currenttime = h + ':' + m;
    const times = food.availabletime.split('-');
    const t1 = times[0].split(':');
    const t2 = times[1].split(':');
    return ((h > t1[0]) || (h === t1[0] && m > t1[1]) ) && (h < t2[0] || (h === t2[0] && m < t2[1]));
  }
}
