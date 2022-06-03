import { Provider, Type } from "@angular/core";
import { ROUTES, Routes } from "@angular/router";

let routes: Routes = [];

export const moduleWithProjectedRoutes = <M>(Module: Type<M>, staticRoutes: Routes = []) => (projectedRoutes: Routes) => {
  staticRoutes.push(...projectedRoutes)
  routes = staticRoutes;
  return Module;
};

export const projectedRoutesProvider = (): Provider => ({
  provide: ROUTES,
  useFactory: () => routes || [],
  multi: true
});
