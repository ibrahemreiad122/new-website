import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  ngOnInit() {
    AOS.init({ once: true });
  }
}
