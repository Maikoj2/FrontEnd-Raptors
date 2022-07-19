import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CssChangeService } from '../services/css-change.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'
  ]
})
export class BackendComponent implements OnInit, AfterViewInit {

  constructor(private cssChanges: CssChangeService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {

  }

}
