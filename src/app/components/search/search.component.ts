import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CarService } from '../../services/car.service';
import { ICar } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() carSelect = new EventEmitter<string>();

  searchForm: FormGroup;
  searchSubscription: Subscription;
  results: ICar[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.subscribeSearchInput();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  initializeForm(): void {
    this.searchForm = this.formBuilder.group({
      searchBy: ['name', Validators.compose([Validators.required])],
      search: ['', Validators.compose([Validators.required])]
    });
  }

  private subscribeSearchInput(): void {
    this.searchSubscription = this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(
      () => {
        if (!this.searchForm.valid) {
          this.results = [];
          this.carSelect.emit('');
          return;
        }
        // call car API
        this.getSearchResults();
      });
  }

  async getSearchResults() {
    try {
      const carResult = await this.carService.fetchSearchResults(this.searchForm.value);
      this.results = !Array.isArray(carResult) ? [carResult] : carResult;
    } catch ( e ) {
    }
  }

  onSearchByChange(): void {
    this.searchForm.get('search').setValue('');
    this.results = [];
    this.carSelect.emit('');
  }

  onResultSelect(value: ICar): void {
    this.searchForm.get('search').setValue(value.MakeName, {emitEvent:false});
    this.carSelect.emit(value.MakeName);
    this.results = [];
  }
}
