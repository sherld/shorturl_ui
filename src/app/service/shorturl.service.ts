import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {
  host: string = "http://shorturl.ap-southeast-1.elasticbeanstalk.com";

  constructor(public http: HttpClient) { }

  public setHost(host: string) {
    this.host = host
  }

  public readShorturls(): Observable<any> {
    return this.http.get(`${this.host}/shorturls`);
  }

  public createShorturl(shorturl): Observable<any> {
    return this.http.post(`${this.host}/shorturls`, shorturl);
  }
}
