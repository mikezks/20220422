import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheDomainModule } from '@projected-routes/recherche/domain';
import { CommonComponent } from './common.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule, RechercheDomainModule],
  declarations: [CommonComponent, HomeComponent, AboutComponent],
  exports: [CommonComponent],
})
export class RechercheFeatureCommonModule {}
