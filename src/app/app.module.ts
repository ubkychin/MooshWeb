import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersbootstrapComponent } from './usersbootstrap/usersbootstrap.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FoodsComponent } from './foods/foods.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
import { TesttableComponent } from './testtable/testtable.component';
import { NgbdSortableHeaderDirective } from './sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UsersbootstrapComponent,
    FoodsComponent,
    TableComponent,
    TestComponent,
    TesttableComponent,
    NgbdSortableHeaderDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
