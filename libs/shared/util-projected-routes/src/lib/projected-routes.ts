import { Provider, Type } from "@angular/core";
import { ROUTES, Routes } from "@angular/router";

let routes: Routes = [];

export const moduleWithProjectedRoutes = <M>(Module: Type<M>) => (r: Routes) => {
  routes = r;
  return Module;
};

export const projectedRoutesProvider = (): Provider => ({
  provide: ROUTES,
  useFactory: () => routes || [],
  multi: true
});
