import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileChanged(event)
  {
    const file=event.target.files[0];
    const uploadData = new FormData();
    //  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    // this.http.post('my-backend.com/file-upload', uploadData)
    //   .subscribe(...);
  }

}
