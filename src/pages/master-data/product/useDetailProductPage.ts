import { useAppDispatch, useAppSelector } from '../../../redux/stores.ts';
import { MasterDataActions } from '../../../redux/actions/master-data-actions.ts';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IResDetailProduct } from '../../../types/response/IResDetailProduct.ts';

export function useDetailProductPage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const { id } = useParams();

  const MasterData = useAppSelector((state) => state.MasterData);

  const [dataDetail, setDataDetail] = useState<IResDetailProduct | undefined>(undefined);

  useEffect(() => {
    if (!id) return;
    dispatch(masterDataAction.getDetailProduct(id)).then();
  }, [id]);

  useEffect(() => {
    if (!MasterData?.detailProduct?.data) return;
    setDataDetail(MasterData?.detailProduct?.data);
  }, [MasterData?.detailProduct?.data]);

  return { dataDetail };
}
