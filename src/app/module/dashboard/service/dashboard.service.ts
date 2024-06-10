import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  contactService(query: any) {
    //Temp service
    return of(query);
  }

  signupService(query:{email:string,fullName:string}){
    //Temp Service
    return of(query);
  }
}
