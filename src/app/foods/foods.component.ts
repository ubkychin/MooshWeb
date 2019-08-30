import { Component, OnInit, Input } from '@angular/core';
import { FoodService} from '../food.service';
import { Food, SelectedFood, FoodUsage } from '../classes/food';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})

export class FoodsComponent implements OnInit {
  foods: Food[] = [];
  selectedFoods: SelectedFood[] = [];
  foodUsages: FoodUsage[] =[];
  headers: string[] = ['id', 'name', 'selectedQuantity', 'cookedQuantity'];

  page = 1;
  pageSize = 6;
  collectionSize = -1;


  public chartMinQty = 1;
  public chartOption = 'cooked';
  public doughnutChartLabels = [];
  public doughnutChartData = [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1 , 1, 1, 1];
  public doughnutSelectedChartData = [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1 , 1, 1, 1];
  public doughnutCookedChartData = [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1 , 1, 1, 1];
  public doughnutChartType = 'doughnut';


  public barChartColours = [
    { backgroundColor: 'rgba(0,255,0,1)'},
    { backgroundColor: 'rgba(255,0,0,1)'},
    { backgroundColor: 'rgba(0,0,255,1)'}
  ];

  public barChartType: ChartType = 'bar';
  public barChartLabels: string[] = ['Selected', 'Cooked'];
  public barChartData: ChartDataSets[] = [
    {data: [10, 3], label: 'bacon'},
    {data: [3, 2], label: 'broccoli'},
    {data: [3, 3], label: 'tomato'}
  ];

  public doughnutChartOptions: any = {
      title: {
        display: true,
        text: this.chartOption + ' foods',
        fontSize: 20,
        position: 'right'
      },
      animation: {
          duration: 3000
      },
      legend: {
        position: 'right'
      }
    };

    public barChartOptions: any = {
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 0.7,
          maxBarThickness: 50,
        }],
        xAxes: [{
          barPercentage: 0.7,
          maxBarThickness: 5,
        }],

      },
      title: {
        display: false,
        text: this.chartOption + ' foods',
        fontSize: 20,
        position: 'right'
      },
      animation: {
          duration: 5000
      },
      legend: {
        position: 'right'
      }

    };

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.getFoods();
    await this.getFoodUsage();
    this.collectionSize = this.foods.length;

    this.getChartLabels();
    this.getChartData();
  }

  getFoods() {
    return new Promise(resolve => {this.foodService.getFoods().subscribe((u) =>
      { this.foods = u; resolve(); }); });
  }


  getFoodUsage() {
    return new Promise(resolve => {this.foodService.getFoodUsageReport().subscribe((u) =>
      { this.foodUsages = u; resolve(); }); });
  }

  getChartLabels() {
    this.doughnutChartLabels = [];
    if (this.chartOption === 'selected') {
      this.foodUsages.forEach(fu => fu.selectedQuantity > 0 ? this.doughnutChartLabels.push(fu.name) : {} );
    } else {
      this.foodUsages.forEach(fu => fu.cookedQuantity > 0 ? this.doughnutChartLabels.push(fu.name) : {} );
    }
  }

  getChartData() {
    this.doughnutChartData = [];
    if (this.chartOption === 'selected') {
      this.foodUsages.forEach(fu => fu.selectedQuantity > 0 ? this.doughnutChartData.push(fu.selectedQuantity) : {} );
    } else {
      this.foodUsages.forEach(fu => fu.cookedQuantity > 0 ? this.doughnutChartData.push(fu.cookedQuantity) : {} );
    }

    this.getBarChartDataSets(this.chartMinQty);
  }

  toggleOption() {
    this.chartOption === 'cooked' ? this.chartOption = 'selected' : this.chartOption = 'cooked';
    this.getChartData();
    this.getChartLabels();
  }

  minQtyChange() {
    this.getChartData();
    this.getChartLabels();
  }

  getBarChartDataSets(min: number) {
    this.barChartData = [];
    this.foodUsages.forEach(fu => (fu.selectedQuantity >= min  || fu.cookedQuantity >= min) ?
        this.barChartData.push( {data: [fu.selectedQuantity, fu.cookedQuantity], label: fu.name} ) : {} );
  }

}
