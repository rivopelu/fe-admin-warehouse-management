import { useAppDispatch, useAppSelector } from '../../../redux/stores.ts';
import { MasterDataActions } from '../../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { IResListProduct } from '../../../types/response/IResListProduct.ts';

export function useProductPage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);
  const loadingPage = MasterData?.listProduct?.loading;

  const [dataList, setDataList] = useState<IResListProduct[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(masterDataAction.getListProduct()).then();
  }

  useEffect(() => {
    if (!MasterData?.listProduct?.data) return;
    setDataList(MasterData?.listProduct?.data);
  }, [MasterData?.listProduct]);

  return { dataList, loadingPage };
}
