import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  favorite!: boolean;
 

  constructor(private foodservice: FoodService, activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) {
      foodsObservable = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag){
      foodsObservable = foodservice.getAllFoodsByTag(params.tag); 
      } else {
        foodsObservable = foodservice.getAll();
      }
      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })

    
    this.favorite = !this.favorite;
  }
  
  ngOnInit(): void {
    
  }
}
