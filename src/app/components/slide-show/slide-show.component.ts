import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlideShowService } from 'src/app/services/slide-show.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<any> = new Subject<any>();
  public images = [];
  constructor(private slideShowService: SlideShowService, config: NgbCarouselConfig) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.getImagesFromServer();
  }

  getImagesFromServer() {
    this.slideShowService.getImages()
    .pipe(
      takeUntil(this.unsubscribe),
      map(imageData => {
          this.images = imageData['data'];
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.unsubscribe.unsubscribe();
  }
}
