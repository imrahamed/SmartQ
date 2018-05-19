import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  oriental = [{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"veg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"}]
  cc = [{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"}]
  cs = [{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"}]
  salads = [{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"}]

  ngOnInit() {

  }
}
