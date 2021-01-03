import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  userName = 'Crackzy';
  myFlagButton;

  constructor() { }

  ngOnInit(): void {
  }
  emptyMyFeild() {
    this.userName = "";
    this.myFlagButton = true;

  }
  takeInput(event) {
    var ev = event;
    console.log(ev);
    this.userName = ev.target.value;
    if (this.userName == "") {
      this.myFlagButton = true;
    }
    else {
      this.myFlagButton = false;
    }
  }
}
