import { useAppDispatch, useAppSelector } from '../../redux/stores.ts';
import { MasterDataActions } from '../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';

export default function useSettingPrivilegePage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);
  const [listPrivileges, setListPrivileges] = useState<PRIVILEGE[]>([]);

  useEffect(() => {
    dispatch(masterDataAction.getListPrivileges()).then();
  }, []);

  useEffect(() => {
    if (!MasterData?.listPrivileges) {
      return;
    }
    setListPrivileges(MasterData?.listPrivileges.data || []);
  }, [MasterData?.listPrivileges]);

  return { listPrivileges };
}
