import { CommonService } from './../../service/Common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass'],
  providers: [CommonService],
})

export class MainLayoutComponent implements OnInit{
  ngOnInit(): void {

  }

}
