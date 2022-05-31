import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrefferlistDomainModule } from '@projected-routes/trefferlist/domain';
import { CommonComponent } from './common.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, TrefferlistDomainModule],
  declarations: [CommonComponent, AboutComponent, HomeComponent],
  exports: [CommonComponent],
})
export class TrefferlistFeatureCommonModule {}
