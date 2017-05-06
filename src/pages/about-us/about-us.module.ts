import { AboutUs } from './about-us';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    AboutUs,
  ],
  imports: [
    IonicPageModule.forChild(AboutUs),
  ],
  exports: [
    AboutUs
  ]
})
export class AboutUsModule {}
