import { Component, OnInit } from '@angular/core';
import { UserFoods } from '../classes/user';
import { Food } from '../classes/food';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  userFoods: UserFoods;
  id: string;
  detailComponent = 'foodDetail';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id'); });
    }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.getUsages(this.id);
    console.log(this.userFoods.userId);
    console.log(this.userFoods.food);
  }

  getUsages(id: string) {
    return new Promise(resolve => {this.userService.getUserFoodsUsage(id).subscribe((u) =>
      { this.userFoods = u; resolve(); }); });
  }

  public goBack() {
    this.router.navigateByUrl('/users');
  }

}
