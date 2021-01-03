import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  usageOfInterpolation = "Interpolation is used to send data from ts to front screen.";
  myEvent = "No event exists!!";
  newEvent = "Birthday Event";
  interpolationThroughMethod() {
    return "Interpolation can also be performed using a method that returns string"
  }
  delayMyButton = false;
  constructor() {

    setTimeout(() => {
      this.delayMyButton = true;
    }, 3000)

  }

  ngOnInit(): void {
  }
  onEventBindingCreation() {
    this.myEvent = "Event is created successfully.";

  }
  addNewInput(event: any) {
    console.log(event);
    // At the time of 2 way binding we don't need the next line written 
    this.newEvent = event.target.value;
  }
}
