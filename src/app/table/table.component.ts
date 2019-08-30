import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgbdSortableHeaderDirective, SortEvent } from '../sortable.directive';
import { DecimalPipe } from '@angular/common';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DecimalPipe]
})

export class TableComponent implements OnInit {
  // @Input() objects: any[] = [];
  @Input() tableHeaders: string[] = [];
  rows: any[] = [];
  private _type = 'hello';

  // initialize a private variable _data, it's a BehaviorSubject
  private _objects = new BehaviorSubject<any[]>([]);

  // change data to use getter and setter
  @Input()
  set objects(value) {
    // set the latest value for _data BehaviorSubject
    this._objects.next(value);
  }

  get objects() {
    // get the latest value from _data BehaviorSubject
    return this._objects.getValue();
  }

  page = 1;
  pageSize = 5;
  collectionSize = -1;
  searchTerm = '';
  displayObjects: any[] = [];
  arst = 'a';

  get PaginationObjects(): any[] {
    return this.displayObjects
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  @Input()
  set type(value) {
    // set the latest value for _data BehaviorSubject
    this._type = value;
  }

  get type() {
    // get the latest value from _data BehaviorSubject
    return this._type;
  }



  constructor(private pipe: DecimalPipe) {
  }

  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  match(obj: any): boolean {
    let result = false;

    this.tableHeaders.forEach(h => {
      if (typeof obj[h] === 'number') {
        if (this.pipe.transform(obj[h]).includes(this.searchTerm)) {
          result = true;
        }
      } else {
        if (obj[h].toLowerCase().includes(this.searchTerm)) {
          result = true;
        }
      }
    });

    return result;
  }

  search() {
    console.log(this.searchTerm);

    this.displayObjects = this.objects.filter(o => this.match(o));


    // this.displayObjects = this.objects.filter(o => o.name.toLowerCase().includes(this.searchTerm));
    this.collectionSize = this.displayObjects.length;
  }
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.displayObjects = this.displayObjects;
    } else {
      this.displayObjects = this.displayObjects.sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  ngOnInit() {
    console.log(this.objects);
    if (!this.objects || this.objects.length < 1) {
      console.log('undefined');
      this._objects.subscribe(x => this.update());
    } else {
      console.log('defined');
      this.update();
    }
  }

  update() {
    // this.getHeaders();
    this.collectionSize = this.objects.length;
    this.displayObjects = this.objects;
  }

  getHeaders() {
    if (this.objects.length) {
      this.tableHeaders = Object.keys(this.objects[0]);
      console.log(this.tableHeaders);
    }
  }

}





