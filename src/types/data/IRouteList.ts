import { JSX } from 'react';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum.ts';

export interface IRouteList {
  route: string;
  elements: () => JSX.Element;
  type: PAGE_TYPE_ENUM;
}
