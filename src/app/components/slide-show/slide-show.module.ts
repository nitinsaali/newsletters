import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlideShowComponent } from './slide-show.component';

@NgModule({
  declarations: [
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    SlideShowComponent
  ]
})
export class SlideShowModule { }
