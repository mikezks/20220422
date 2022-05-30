import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrefferlistDomainModule } from '@projected-routes/trefferlist/domain';
import { CommonComponent } from './common.component';

@NgModule({
  imports: [CommonModule, TrefferlistDomainModule],
  declarations: [CommonComponent],
  exports: [CommonComponent],
})
export class TrefferlistFeatureCommonModule {}
