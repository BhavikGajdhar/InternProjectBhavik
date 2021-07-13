import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @ViewChild('el') span:ElementRef | undefined;
  el: any;

  
  constructor() {}

  ngOnInit(): void {}

  public  myFunction() {
   //console.log('add');
   //el.classList.add('mystyle');
   this.el.nativeElement.setAttribute('mystyle','');
  }
}
