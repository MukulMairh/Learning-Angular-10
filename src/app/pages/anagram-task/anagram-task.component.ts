import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram-task',
  templateUrl: './anagram-task.component.html',
  styleUrls: ['./anagram-task.component.scss']
})
export class AnagramTaskComponent implements OnInit {
  public string1 = "";
  public string2 = "";
  public result = "";
  constructor() { }

  ngOnInit(): void {
  }


  checkAnagramGoClick() {
    //This method is to check wheather our strings are anagram or not.
    //Converting strings to string array.. 

    let str1 = Array.from(this.string1.toLowerCase());
    let str2 = Array.from(this.string2.toLowerCase());
    console.log("string 1: ", str1);
    console.log("string 2: ", str2);
    debugger;
    let i, j; //local variables for iterating 
    if (str1 == [] || str2 == [])
      return this.result = "Please enter both fields!!";
    else if (str1.length != str2.length) {
      return this.result = "This is not an anagram";
    }
    else {
      for (i = 0; i < str1.length; i++) {
        for (j = 0; j < str2.length; j++) {
          if (str1[i] == str2[j]) {
            str2.splice(j, 1);
          }
        }
      } if (str2.length == 0) {
        return this.result = "These strings are anagram";
      }
      else { return this.result = "These are not" }
    }
  }
}