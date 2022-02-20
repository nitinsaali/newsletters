import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SlideShowService {
    
    constructor(private http: HttpClient) { }


    getImages() {
        return this.http.get(`${environment.apiUrl}default/20200528/test.json`);
    }
    
}