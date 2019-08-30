import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersbootstrapComponent } from './usersbootstrap/usersbootstrap.component';
import { FoodsComponent } from './foods/foods.component';
import { TestComponent } from './test/test.component';
import { TesttableComponent } from './testtable/testtable.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'test', component: TesttableComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
