import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(
    public navCtrl: NavController,
    public app: App
  ) { }
}
