import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctors } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public _url="https://localhost:7045/api/Doctors";
  
  // you u have create the folder manually and pass the path here
  constructor(private http:HttpClient){}

  
  
  getDoctors():Observable<IDoctors[]>{
    return  this.http.get<IDoctors[]>(this._url)
  //  url is holding the data
  //for get method urs is necessary

  }
  adddoctors(adddoctoremployee: IDoctors): Observable<IDoctors> {
    adddoctoremployee.did= '0000000-0000-0000-0000-000000000000'
    return this.http.post<IDoctors>(this._url, adddoctoremployee);
  }
  getDoctorrbyId(did: string):Observable<IDoctors>{
   return this.http.get<IDoctors>(this._url+did);
  } 
    
  
 
}

