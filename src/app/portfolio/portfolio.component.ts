import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  constructor(private router: Router) {
    document.body.style.padding = "0";
    document.body.style.lineHeight = "1.2"
  }

  date = new Date;

  projectOne() {
    this.router.navigate(["hotel"])
  }

  projectTwo() {
    this.router.navigate(["trip"])
  }

  projectThree() {
    this.router.navigate(["nexter"])
  }
  ngOnInit() {
  }

}
