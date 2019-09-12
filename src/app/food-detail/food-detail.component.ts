import { Component, OnInit } from '@angular/core';
import { Food, FoodUsage } from '../classes/food';
import { FoodService } from '../food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, DecimalPipe } from '@angular/common';
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

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.paramMap.subscribe(params => {
        this.id = +params.get('id'); });
    }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.getFood(this.id);
    await this.getUsages(this.id);
    this.usage = this.usages[0];
  }

  getFood(id: number) {
    return new Promise(resolve => {this.foodService.getFood(id).subscribe((u) =>
      { this.food = u; resolve(); }); });
  }

  getUsages(id: number) {
    return new Promise(resolve => {this.foodService.getFoodUsage(id).subscribe((u) =>
      { this.usages = u; resolve(); }); });
  }

  public next() {
    this.id++;
    this.router.navigateByUrl(`/foodDetail/${this.id}`);
  }

  public prev() {
    this.id--;
    this.router.navigateByUrl(`/foodDetail/${this.id}`);
  }

  public goBack() {
    this.location.back();
  }

}
