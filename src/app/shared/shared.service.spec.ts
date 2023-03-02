import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedService } from './shared.service';
import { MaterialModule } from '../core/material.module';
import { DatePipe } from '@angular/common';

describe('SharedService', () => {
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [SharedService, DatePipe]
    }).compileComponents();
    sharedService = TestBed.get(SharedService);
  });

  it('should be created', () => {
    expect(sharedService).toBeTruthy();
  });

  it('should return string in adding number of days', () => {
    expect(typeof sharedService.addDays(5)).toEqual('string');
  });

  it('should return filtered object', () => {
    const notAllowed = ['obj1', 'obj2'];
    const filtered = sharedService.filterObject({obj1: 'value', obj2: 'value', obj3: 'value'}, notAllowed);
    expect(filtered).toEqual({obj3: 'value'});
  });
});
