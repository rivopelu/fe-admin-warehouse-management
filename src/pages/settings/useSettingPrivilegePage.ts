import { useAppDispatch, useAppSelector } from '../../redux/stores.ts';
import { MasterDataActions } from '../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { IResRolePrivileges } from '../../types/response/IResRolePrivileges.ts';

export default function useSettingPrivilegePage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);

  const [listPrivileges, setListPrivileges] = useState<PRIVILEGE[]>([]);
  const [listRolePrivileges, setListRolePrivileges] = useState<IResRolePrivileges[]>([]);

  useEffect(() => {
    dispatch(masterDataAction.getListPrivileges()).then();
    dispatch(masterDataAction.getListRolePrivileges()).then();
  }, []);

  useEffect(() => {
    if (!MasterData?.listPrivileges) {
      return;
    }
    setListPrivileges(MasterData?.listPrivileges.data || []);
  }, [MasterData?.listPrivileges]);

  useEffect(() => {
    if (!MasterData?.rolePrivileges) return;
    if (MasterData?.rolePrivileges) {
      setListRolePrivileges(MasterData?.rolePrivileges?.data || []);
    }
  }, [MasterData?.rolePrivileges]);

  function onSelectPrivilege(privilege: PRIVILEGE, role: string) {
    let findRole = listRolePrivileges.find((e) => e.role === role);
    if (findRole) {
      let rolePrivilege: PRIVILEGE[];
      if (findRole.privileges.includes(privilege)) {
        rolePrivilege = findRole.privileges.filter((e) => e !== privilege);
      } else {
        rolePrivilege = [...findRole.privileges, privilege];
      }
      findRole = {
        role: findRole.role,
        privileges: rolePrivilege,
      };
      if (findRole) {
        const filtered = listRolePrivileges.filter((e) => e.role !== findRole?.role);
        const data = [...filtered, findRole];
        console.log(data);
        setListRolePrivileges(data);
      }
    }
  }

  return { listPrivileges, listRolePrivileges, onSelectPrivilege };
}
