import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  	this.http.get<any>('http://localhost:8080/allSensors').subscribe({next: data => {
            
        },
        error: error => {
            
        }

        
    })  
   }
}