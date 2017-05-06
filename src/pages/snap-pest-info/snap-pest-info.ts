import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the SnapPestInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-snap-pest-info',
  templateUrl: 'snap-pest-info.html',
})
export class SnapPestInfo {

	isSnap: boolean = false;
	public base64Image: string;
  contact: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera, public formBuilder: FormBuilder) {

this.contact = formBuilder.group({
        Name: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        Email: ['',Validators.compose([Validators.required])],
        Phone: ['',Validators.compose([Validators.required])],
        Message: ['']
    });

  }





  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
    	this.isSnap = true;
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SnapPestInfo');
  }

}
