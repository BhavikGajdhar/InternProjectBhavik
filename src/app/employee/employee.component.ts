import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit,AfterViewInit {

  @ViewChild('el', { static: false })
  el!: ElementRef;

  constructor(private ren: Renderer2) {}

  ngOnInit():void{

  }
  ngAfterViewInit(){
    this.ren.addClass(this.el.nativeElement,'mystyle');
  }
  public myFunction() {
    console.log(this.el.nativeElement)
    this.ren.removeClass(this.el.nativeElement,'mystyle');
  }
}
