import { LazyExoticComponent, ReactElement } from 'react';

type Route = {
  path: string;
  element: LazyExoticComponent<() => ReactElement>; //Is a type to improve perfomance, due to this type indicates that the components that are not immediately needed  is lazily loaded
  children?: Route[];
};
