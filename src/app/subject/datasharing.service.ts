import { Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';

@Injectable()
// {
//   providedIn: 'root'
// }
export class DatasharingService {

  SharingData= new Subject();
  //SharingData= new AsyncSubject();

  constructor() { }
}
