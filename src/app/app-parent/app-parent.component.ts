import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.css']
})
export class AppParentComponent implements OnInit {
   frientlist=["bhavik","smith","aditya"]
   personsName: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  funVote(event:any){
    this.personsName=event;
  }
}
