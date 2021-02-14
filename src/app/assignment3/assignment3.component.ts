import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {
  constructor() { }
  public hideFLag: boolean = false;
  public arr: any = [];

  ngOnInit(): void {
  }
  fuc() {
    debugger;
    let that = this;
    this.hideFLag = !this.hideFLag;

    this.arr.push(that.arr.length + 1);
    // this.arr.push(",");
  }
}
