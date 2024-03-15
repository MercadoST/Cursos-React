// Router.js
import { Children, useEffect, useState } from "react";
import { NAVIGATION_EVENT } from "../const";
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils";

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(NAVIGATION_EVENT.PUSHSTATE, onLocationChange);
    window.addEventListener(NAVIGATION_EVENT.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT.PUSHSTATE, onLocationChange);
      window.removeEventListener(NAVIGATION_EVENT.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // add Routes from children <Route />
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === 'Route';

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />;
}