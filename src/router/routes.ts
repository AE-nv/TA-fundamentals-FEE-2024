export enum RouteName {
  Welcome = 'Welcome',
  Sandwiches = 'Sandwiches',
  SandwichDetail = 'SandwichDetail',
}

export enum RoutePath {
  // root paths: prepended with /
  Root = '/',
  Sandwiches = '/sandwiches',
  // nested paths: not prepended with /
}

export enum RouteParameter {
  SandwichId = 'sandwichId',
}
