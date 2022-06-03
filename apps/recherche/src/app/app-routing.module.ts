import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recherche',
    pathMatch: 'full'
  },
  {
    path: 'recherche',
    loadChildren: () => import('@projected-routes/recherche/feature-common')
      .then(esm => esm.RechercheFeatureCommonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
