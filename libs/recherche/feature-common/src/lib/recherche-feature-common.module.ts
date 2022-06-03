import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheDomainModule } from '@projected-routes/recherche/domain';
import { CommonComponent } from './common.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectedDetailAComponent } from './projected-detail-a/projected-detail-a.component';
import { ProjectedDetailBComponent } from './projected-detail-b/projected-detail-b.component';
import { RechercheFeatureCommonRoutingModule } from './recherche-feature-common-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RechercheFeatureCommonRoutingModule,
    RechercheDomainModule
  ],
  declarations: [
    CommonComponent,
    HomeComponent,
    AboutComponent,
    ProjectedDetailAComponent,
    ProjectedDetailBComponent,
  ],
  exports: [
    CommonComponent
  ]
})
export class RechercheFeatureCommonModule {}
