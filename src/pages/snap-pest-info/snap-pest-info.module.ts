import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnapPestInfo } from './snap-pest-info';

@NgModule({
  declarations: [
    SnapPestInfo,
  ],
  imports: [
    IonicPageModule.forChild(SnapPestInfo),
  ],
  exports: [
    SnapPestInfo
  ]
})
export class SnapPestInfoModule {}
