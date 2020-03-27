import { Component, OnInit } from '@angular/core';
import { ShorturlService } from '../service/shorturl.service';

@Component({
  selector: 'app-shorturl-list',
  templateUrl: './shorturl-list.component.html',
  styleUrls: ['./shorturl-list.component.css']
})
export class ShorturlListComponent implements OnInit {

  shorturlList: any[];

  constructor(private shorturlService: ShorturlService) { }

  ngOnInit() {
  }

  refresh() {
    this.getShorturlList();
  }

  getShorturlList() {
    this.shorturlService.readShorturls()
      .subscribe(ret => {
        this.shorturlList = ret
      },
      error => {
        var test = error;
      })
  }

}
