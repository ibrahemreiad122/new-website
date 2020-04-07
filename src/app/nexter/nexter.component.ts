import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nexter',
  templateUrl: './nexter.component.html',
  styleUrls: ['./nexter.component.scss']
})
export class NexterComponent implements OnInit {

  constructor() {
    document.body.style.fontFamily = '"Nunito",sans-serif';
    document.body.style.color = '#6D5D4B';
    document.body.style.fontWeight = '300';
    document.body.style.lineHeight = '1.6';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }

  ngOnInit() {
  }

}
