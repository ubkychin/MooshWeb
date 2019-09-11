import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../classes/user';
import { Observable, of } from 'rxjs';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  detailComponent = 'userDetail';
  users: User[] = [];
  public doughnutChartLabels = [];
  public doughnutChartData = [1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1 , 1, 1, 1];
  public doughnutChartType = 'doughnut';
  public chartOptions: any = {
      title: {
        display: true,
        text: 'User Ages',
        fontSize: 20,
        position: 'right'
      },
      animation: {
          duration: 10000
      },
      legend: {
        position: 'right'
      }
    };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.getUsers();
    this.getChartLabels();
    this.getChartData();
  }

  getUsers() {
    return new Promise(resolve => {this.userService.getUsers().subscribe((u) =>
      { this.users = u; resolve(); }); });
  }

  getChartLabels() {
    this.doughnutChartLabels = [];
    this.users.forEach(u => this.doughnutChartLabels.
      indexOf(u.age.toString()) < 0 ? this.doughnutChartLabels.push(u.age.toString()) : {} );
  }

  getChartData() {
    this.doughnutChartData = [];
    this.doughnutChartLabels.forEach(u => { this.doughnutChartData.push(0); });
    this.users.forEach(u => { this.doughnutChartData[this.doughnutChartLabels.indexOf(u.age.toString())]++; });
  }

}
