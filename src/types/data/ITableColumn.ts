import { ReactNode } from 'react';

export interface ITableColumn<T> {
  headerTitle?: string;
  component?: (data: T) => ReactNode;
}
