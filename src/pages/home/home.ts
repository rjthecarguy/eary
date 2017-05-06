import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quote } from '../quote/quote';
import { MyApp } from '../../app/app.component';
import { SnapPestInfo} from '../snap-pest-info/snap-pest-info'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {



  }


snapInfo() {
	console.log("set Root");
	this.navCtrl.setRoot(SnapPestInfo);

	
}
}
