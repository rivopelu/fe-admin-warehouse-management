import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { t } from 'i18next';
import { ROUTES } from '../../routes/routes.ts';
import { useAppDispatch, useAppSelector } from '../../redux/stores.ts';
import { WarehouseAction } from '../../redux/actions/warehouse-action.ts';
import { useEffect, useState } from 'react';
import { IWarehouseSlice } from '../../redux/reducers/warehouse-reducers.ts';
import { IResListWarehouse } from '../../types/response/IResListWarehouse.ts';

export function useWarehousePage() {
  const dispatch = useAppDispatch();
  const warehouseAction = new WarehouseAction();

  const Warehouse: IWarehouseSlice = useAppSelector((state) => state.Warehouse);

  const [listData, setListData] = useState<IResListWarehouse[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!Warehouse?.listWarehouse) return;
    if (Warehouse?.listWarehouse?.data && Warehouse?.listWarehouse?.data.length > 0) {
      return setListData(Warehouse.listWarehouse.data);
    }
  }, [Warehouse?.listWarehouse]);

  function fetchData() {
    dispatch(warehouseAction.getListWarehouse()).then();
  }

  const dataBreadcrumb: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('warehouse'),
    },
  ];

  return { dataBreadcrumb, listData };
}
