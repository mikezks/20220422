import { Provider, Type } from "@angular/core";
import { Route, ROUTES, Routes } from "@angular/router";

let routes: Routes = [];

export const moduleWithProjectedRoutes = <M>(Module: Type<M>, staticRoutes?: Routes) => (projectedRoutes: Routes) => {
  staticRoutes?.[0]?.children?.push(...projectedRoutes);
  routes = staticRoutes ? staticRoutes : projectedRoutes;
  return Module;
};

export const projectedRoutesProvider = (): Provider => ({
  provide: ROUTES,
  useFactory: () => routes || [],
  multi: true
});

export function cloneRouteReturnWithEmptyChildren(route: Route): Routes {
  return [{
    ...route,
    children: []
  }];
}
