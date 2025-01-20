import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckInPageRoutingModule } from './check-in-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CheckInPage } from './check-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    CheckInPageRoutingModule,
  ],
  declarations: [CheckInPage],
})
export class CheckInPageModule {}
