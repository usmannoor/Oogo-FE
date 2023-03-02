import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  searchResult: string;
  loaderSubscription: Subscription;
  isLoading = false;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscribeToLoader();
  }

  onCarSelected(value: string) {
    this.searchResult = value;
  }

  private subscribeToLoader() {
    this.loaderSubscription = this.loaderService.loader
      .subscribe(value => {
        this.isLoading = value;
      });
  }
}

