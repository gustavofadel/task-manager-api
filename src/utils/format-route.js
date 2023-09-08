export function formatRoute(route) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const routeWithParameters = route.replaceAll(
    routeParametersRegex,
    "(?<$1>[a-z0-9-_]+)"
  );

  const routeRegex = new RegExp(`^${routeWithParameters}(?<query>\\?(.*))?$`);

  return routeRegex;
}
