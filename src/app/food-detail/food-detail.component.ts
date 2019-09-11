import { Component, OnInit } from '@angular/core';
import { Food, FoodUsage } from '../classes/food';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  usages: FoodUsage[];
  food: Food;
  usage: FoodUsage;

  id: number;
  id_string: string;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private location: Location) {
      this.route.paramMap.subscribe(params => {
        this.id_string = params.get('id'); });
    }

  ngOnInit() {
    this.init();
  }

  async init() {
    console.log(this.id);
    await this.getFood(this.id);
    await this.getUsages(this.id);
    console.log(this.usages);
    this.usage = this.usages[0];
    console.log(this.usage);
  }

  getFood(id: number) {
    return new Promise(resolve => {this.foodService.getFood(id).subscribe((u) =>
      { this.food = u; resolve(); }); });
  }

  getUsages(id: number) {
    return new Promise(resolve => {this.foodService.getFoodUsage(id).subscribe((u) =>
      { this.usages = u; resolve(); }); });
  }

  public goBack() {
    this.location.back();
  }

}
