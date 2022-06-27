import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homebanner } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
homebanner = 'http://localhost:1337/api/banners?populate=*';
  constructor(private http:HttpClient) { 
  }

  getHomeBanner(){
    return this.http.get<{data:[Homebanner[]]}>(this.homebanner);
  }


}
