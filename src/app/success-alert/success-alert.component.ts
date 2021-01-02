import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  usageOfInterpolation="Interpolation is used to send data from ts to front screen.";
  myEvent="No event exists!!";
  interpolationThroughMethod ()
  {
    return "Interpolation can also be performed using a method that returns string"
  }
  delayMyButton=false;
  constructor() { 

   setTimeout(()=>{
     this.delayMyButton=true;
   },3000)   

  }

  ngOnInit(): void {
  }
  onEventBindingCreation(){
    this.myEvent="Event is created successfully.";

  }
 
}
