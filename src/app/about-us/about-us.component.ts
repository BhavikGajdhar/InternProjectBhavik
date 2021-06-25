import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapServiceService } from './map-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  Public:any= [];
   sub!: Subscription;
  constructor( public restApi: MapServiceService,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.restApi.loadPublicData().subscribe((res)=>{
     this.Public  = res.map((data:any) => data =( data.name +'--in--'+ data.design))
     // this.Public = data;
      console.log(this.Public);
    })
    setTimeout(() => {
    this.Public.unsubscribe();
  }, 3000);

  }

}
