import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {

  constructor() {
    document.body.style.backgroundImage = "linear-gradient(to right bottom, var(--red-light), var(--red-dark))"
  }

  ngOnInit() {
  }

}
