import { useAppDispatch, useAppSelector } from '../../../redux/stores.ts';
import { MasterDataActions } from '../../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { IResListCategory } from '../../../types/response/IResListCategory.ts';

export default function useCategoryPage() {
  const [dataList, setDataList] = useState<IResListCategory[]>([]);

  const MasterData = useAppSelector((state) => state.MasterData);
  const loading = MasterData?.listAllCategory?.loading;
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();

  useEffect(() => {
    dispatch(masterDataAction.getListAllCategory()).then();
  }, []);

  useEffect(() => {
    if (!MasterData?.listAllCategory?.data) return;
    setDataList(MasterData?.listAllCategory?.data);
  }, [MasterData?.listAllCategory?.data]);

  return { dataList, loading };
}
