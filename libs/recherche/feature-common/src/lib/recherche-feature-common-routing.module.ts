import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommonComponent } from './common.component';
import { HomeComponent } from './home/home.component';
import { ProjectedDetailAComponent } from './projected-detail-a/projected-detail-a.component';
import { ProjectedDetailBComponent } from './projected-detail-b/projected-detail-b.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'trefferlist',
        loadChildren: () => import('@projected-routes/trefferlist/feature-common')
          .then(esm => esm.TrefferlistFeatureCommonModule.withProjectedRoutes([
            {
              path: 'projected-feature-a',
              component: ProjectedDetailAComponent
            },
            {
              path: 'projected-feature-b',
              component: ProjectedDetailBComponent
            }
          ]))
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercheFeatureCommonRoutingModule { }
