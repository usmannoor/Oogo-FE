import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarRoutingModule } from './car-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { CarComponent } from './car.component';
import { SearchComponent } from '../components/search/search.component';
import { MaterialModule } from '../core/material.module';

import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderService } from '../services/loader.service';
import { NgChartsModule } from 'ng2-charts';
import { SharedService } from '../shared/shared.service';

@NgModule({
  declarations: [
    CarComponent,
    HeaderComponent,
    SearchComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    SharedService,
    LoaderService
  ],
})
export class CarModule {}
