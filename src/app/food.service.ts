import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ThrowStmt } from '@angular/compiler';
import { Food, SelectedFood, FoodUsage } from './classes/food';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[] = [];

  constructor(private httpService: HttpService, private httpClient: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.httpService.getAll('food') as Observable<Food[]>;
  }

  getFood(id: number): Observable<Food> {
    return this.httpService.getAll(`food/${id}`) as Observable<Food>;
  }

  getSelectedFoods(): Observable<SelectedFood[]> {
    return this.httpService.getAll('selectedfood') as Observable<SelectedFood[]>;
  }

  getFoodUsageReport(): Observable<FoodUsage[]> {
    return this.httpService.getAll('Food/UsageReport/0') as Observable<FoodUsage[]>;
  }

  getFoodUsage(id: number): Observable<FoodUsage[]> {
    return this.httpService.getAll(`Food/UsageReport/${id}`) as Observable<FoodUsage[]>;
  }
}
