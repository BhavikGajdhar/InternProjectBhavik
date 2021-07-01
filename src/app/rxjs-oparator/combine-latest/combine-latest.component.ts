import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  public name = ['darpen','vishal','nidhi','kiran','darsh','bhavik','ankit','parth']  
  public color = ['red','blue','green']

  public nameSubject = new BehaviorSubject('darpan');
  public colorSubject = new BehaviorSubject('red');
  public selectedData:any[] =[];

  constructor() { }

  ngOnInit(): void {
  combineLatest(this.nameSubject,this.colorSubject).subscribe(([res1,res2])=>{
      
      this.selectedData.push({name:res1,color:res2})
      
    })
	}

	onChangeName(event:any){
		
		this.nameSubject.next(event.target.value);
	}

	onChangeColor(event:any){
	
		this.colorSubject.next(event.target.value);

	}

}
