import { useAppDispatch, useAppSelector } from '../../redux/stores.ts';
import { MasterDataActions } from '../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { IResRolePrivileges } from '../../types/response/IResRolePrivileges.ts';
import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import toast from 'react-hot-toast';
import { t } from 'i18next';

export default function useSettingPrivilegePage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const [listPrivileges, setListPrivileges] = useState<PRIVILEGE[]>([]);
  const [listRolePrivileges, setListRolePrivileges] = useState<IResRolePrivileges[]>([]);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [disableButtonSubmit, setDisableButtonSubmit] = useState<boolean>(true);

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
    if (MasterData?.rolePrivileges?.data) {
      const res = JSON.stringify(MasterData.rolePrivileges.data);
      const dataList = JSON.stringify(listRolePrivileges);
      setDisableButtonSubmit(res === dataList);
    }
  }, [MasterData?.rolePrivileges?.data, listRolePrivileges]);

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

  function onSubmitSettingPrivilege() {
    if (listRolePrivileges.length >= 1) {
      setLoadingSubmit(true);
      httpService
        .PUT(ENDPOINT.SETTING_PRIVILEGE(), listRolePrivileges)
        .then(() => {
          setLoadingSubmit(false);

          toast.success(t('role_successfully_updated'));
        })
        .catch((e) => {
          errorService.fetchApiError(e);
          setLoadingSubmit(false);
        });
    } else {
      console.log('ERROR');
    }
  }

  return {
    listPrivileges,
    listRolePrivileges,
    onSelectPrivilege,
    onSubmitSettingPrivilege,
    loadingSubmit,
    disableButtonSubmit,
  };
}
