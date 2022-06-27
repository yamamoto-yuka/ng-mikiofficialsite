import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homebanner } from '../interfaces/interface';
import { Homelive } from '../interfaces/interface';
import { Discography } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
homebanner = 'http://localhost:1337/api/banners?populate=*';
homeliveinfo = 'http://localhost:1337/api/homeliveinfo';
discography = 'http://localhost:1337/api/discographies?populate=*';

  constructor(private http:HttpClient) { 
  }

  getHomeBanner(){
    return this.http.get<{data:[Homebanner[]]}>(this.homebanner);
  }

  getHomelive(){
    return this.http.get<{data:Homelive}>(this.homeliveinfo);
  }

  getDiscographies(){
    return this.http.get<{data:[Discography[]]}>(this.discography);
  }
}
