import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ShorturlListComponent } from './shorturl-list/shorturl-list.component';
import { ShorturlNewComponent } from './shorturl-new/shorturl-new.component';
import { ShorturlService } from './service/shorturl.service';

@NgModule({
  declarations: [
    AppComponent,
    ShorturlListComponent,
    ShorturlNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ShorturlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
