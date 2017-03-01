import { Injectable, Component } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoanStatusService {

  constructor(private http: Http) { }

  getLoan(trackingNumber: string): Promise<any>{
    //let url = "https://api-swed-loan.herokuapp.com/view/";
    console.log(trackingNumber);
    return this.http.get("https://api-swed-loan.herokuapp.com/view/" + trackingNumber)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}