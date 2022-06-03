import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrefferlistDomainModule } from '@projected-routes/trefferlist/domain';
import { CommonComponent } from './common.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { routes, TrefferlistFeatureCommonRoutingModule } from './trefferlist-feature-common-routing.module';
import { moduleWithProjectedRoutes, projectedRoutesProvider } from '@projected-routes/shared/util-projected-routes';

@NgModule({
  imports: [
    CommonModule,
    TrefferlistFeatureCommonRoutingModule,
    TrefferlistDomainModule
  ],
  declarations: [
    CommonComponent,
    AboutComponent,
    HomeComponent
  ],
  providers: [
    projectedRoutesProvider()
  ],
  exports: [
    CommonComponent
  ],
})
export class TrefferlistFeatureCommonModule {
  static withProjectedRoutes = moduleWithProjectedRoutes(
    TrefferlistFeatureCommonModule,
    routes[0].children
  );
}
