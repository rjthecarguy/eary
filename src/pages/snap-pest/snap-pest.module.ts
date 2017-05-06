import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnapPest } from './snap-pest';

@NgModule({
  declarations: [
    SnapPest,
  ],
  imports: [
    IonicPageModule.forChild(SnapPest),
  ],
  exports: [
    SnapPest
  ]
})
export class SnapPestModule {}
