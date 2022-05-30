import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheDomainModule } from '@projected-routes/recherche/domain';
import { CommonComponent } from './common.component';

@NgModule({
  imports: [CommonModule, RechercheDomainModule],
  declarations: [CommonComponent],
  exports: [CommonComponent],
})
export class RechercheFeatureCommonModule {}
