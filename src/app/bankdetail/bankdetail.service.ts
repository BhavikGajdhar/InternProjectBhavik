import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankdetail } from './bankdetail.model';

@Injectable()
export class BankdetailService {
  apiURL = 'http://localhost:3000/bank';

  constructor(private http: HttpClient) {}

  //Get List of Bank Detail
  public getBankdetails(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
  // Searching field 
  getSearch(search: string):Observable<any>{
    
    return this.http.get<any>(this.apiURL+'?q='+search)
  }

  // Add Bank Detail
  public addBankdetail(data: Bankdetail): Observable<Bankdetail> {
    return this.http.post<Bankdetail>(this.apiURL, data);
  }

  // Fetch Data By ID
  public getBankDetailData(id: number): Observable<Bankdetail> {
    return this.http.get<Bankdetail>(this.apiURL + '/' + id);
  }

  // Update Bank Detail By ID
  public putBankDetailData(
    id: number,
    data: Bankdetail
  ): Observable<Bankdetail> {
    return this.http.put<Bankdetail>(this.apiURL + '/' + id, data);
  }

  // Delete Bank Detail By ID
  public deleteBankdetail(id: number) {
    return this.http.delete<Bankdetail>(this.apiURL + '/' + id);
  }
}
