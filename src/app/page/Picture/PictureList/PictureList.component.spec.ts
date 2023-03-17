/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PictureListComponent } from './PictureList.component';

describe('PictureListComponent', () => {
  let component: PictureListComponent;
  let fixture: ComponentFixture<PictureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
