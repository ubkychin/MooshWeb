import { Component, OnInit } from '@angular/core';
import { Thing } from '../classes/thing';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  things: Thing[] = [
    {id: 1, name: 'thingOne', category: 'stuff'},
    {id: 2, name: 'thingy', category: 'stuff'},
    {id: 3, name: 'doughnut', category: 'stuff'},
    {id: 4, name: 'pig', category: 'stuff'},
    {id: 5, name: 'table', category: 'stuff'}
  ];

  constructor() { }

  ngOnInit() { }

}
