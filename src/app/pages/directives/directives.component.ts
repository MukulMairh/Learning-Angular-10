import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public serverName = '';
  public serverStatus = 'No existing Server';
  public serverCreated = false;


  constructor() {
    // this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  createServer() {
    this.serverCreated = true;
    this.serverStatus = 'Server is Created';
  }
  changingBackground() {
    return this.serverCreated === true ? 'olivedrab' : 'lightcoral';
  }

}
