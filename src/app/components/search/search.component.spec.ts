import { SearchComponent } from './search.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CarService } from '../../services/car.service';
import { LoaderService } from '../../services/loader.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let carService: CarService;
  let loaderService: LoaderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        FormBuilder,
        CarService,
        LoaderService,
        HttpClient,
        HttpHandler
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();
    carService = TestBed.inject(CarService);
    loaderService = TestBed.inject(LoaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
