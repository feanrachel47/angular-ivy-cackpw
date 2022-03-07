import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'hello',
  template: `<h1>Hello!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var result = this.bubbleSort([1, 12, 3]);
    var result_2 = this.findMinDiff([1, 12, 3]);
    this.formatStringToTime();
    console.log('result', result, result_2);
  }

  formatStringToTime() {
    var array1 = ['1:10pm', '4:40am', '5:00pm'];
    var startTime = moment('06:10:00', 'hh:mm');
    console.log('result1', startTime);
  }

  findMinDiff(array) {
    // Initialize difference as infinite
    var diff: any = Number.MAX_SAFE_INTEGER;

    // Find the min diff by comparing difference
    // of all possible pairs in given array
    // parseInt(Math.abs(array[i].getTime() - array[j].getTime()) / (1000 * 60) % 60)
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] - array[j] < diff) {
          diff = array[i] - array[j];
        }
      }
    }

    // Return min diff
    return diff;
  }

  bubbleSort(Array) {
    let len = Array.length;
    for (let i = 0; i < len; i++) {
      //you can also use "for in", so you don't need the variable "len"
      for (let j = 0; j < len; j++) {
        if (Array[j] > Array[j + 1]) {
          let tmp = Array[j];
          Array[j] = Array[j + 1];
          Array[j + 1] = tmp;
        }
      }
    }
    return Array;
  }
}
