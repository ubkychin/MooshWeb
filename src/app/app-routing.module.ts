import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FoodsComponent } from './foods/foods.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'foods', component: FoodsComponent },
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
