import { Component, OnInit } from '@angular/core';
import { ShorturlService } from '../service/shorturl.service';

@Component({
  selector: 'app-shorturl-new',
  templateUrl: './shorturl-new.component.html',
  styleUrls: ['./shorturl-new.component.css']
})
export class ShorturlNewComponent implements OnInit {

  message: string = "";

  constructor(private shorturlService: ShorturlService) { }

  ngOnInit() {
  }

  submit(url: HTMLInputElement) {
    const shorturl = {'url': url.value};
    this.shorturlService.createShorturl(shorturl)
      .subscribe(
        ret => {
          const shorturl = ret.shorturl;
          this.message = "Success: " + shorturl;
        },
        err => {
          const error = err.error;
          if (error && error.detail) {
            this.message = "Error: " + error.detail;
          }
        }
      );
    return false;
  }

}
