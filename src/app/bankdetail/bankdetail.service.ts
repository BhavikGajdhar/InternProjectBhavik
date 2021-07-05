import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankdetail } from './bankdetail.model';

@Injectable()
export class BankdetailService {
  
   
  apiURL = 'http://localhost:3000/bank';

  constructor(private http: HttpClient) { }


//Get List of Bank Detail
  public  getbankdetails():Observable<any> {
    return this.http.get<any>(this.apiURL)
    
  }


// Add Bank Detail
  public addbankdetail(data:Bankdetail):Observable<Bankdetail> {
    return this.http.post<Bankdetail>(this.apiURL,data);
    
  }
// Fetch Data By Id 
  public getBankDetailData(id:number):Observable<Bankdetail>{
   debugger
    return this.http.get<Bankdetail>(this.apiURL+'/'+id)
   
  } 
  
// Delete Bank Detail by ID
  public deleteBankdetail(id: number) {
    debugger
    return this.http.delete<Bankdetail>(this.apiURL + '/' + id)

  }

}
