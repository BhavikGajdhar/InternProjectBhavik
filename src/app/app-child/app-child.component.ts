import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() names:any;
  @Output() onVoted= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  vote(personsName:any){
    this.onVoted.emit(personsName);
  }

}
