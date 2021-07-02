import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
// import { fromEvent, interval, pipe } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  public counter = 0;
  public array1 = ['bhavik', 'jay', 'ashish', 'hardik'];
  public array2: any = [];
  public search:FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    // ===============================SwitchMap===========================
    // fromEvent(document,'click').pipe(switchMap(()=>interval(500))).subscribe((res:any)=>{
    //   this.counter=res;
    // })

    // this.search.valueChanges
    //   .pipe(
    //     debounceTime(1000),
    //     switchMap((value) => {
    //      let d= this.array1.filter((item) => {
            
    //         item.includes(value);
    //       })
    //       return d;
    //     }
    //     )
    //   )
    //   .subscribe((filterdata) => {
        
    //     this.array2.push(filterdata);
    //   });
  }
  public searchtext(value: any) {
    this.array2 = this.array1.filter((name) => name.includes(value));
  }
}
