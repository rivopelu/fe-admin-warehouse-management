import PageContainer from '../../components/atoms/PageContainer.tsx';
import useSettingPrivilegePage from './useSettingPrivilegePage.ts';
import { Card, CardBody } from '../../components/atoms/Card.tsx';
import Divider from '../../components/atoms/Divider.tsx';
import Grid from '../../components/atoms/Grid.tsx';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/atoms/Button.tsx';
import { t } from 'i18next';
import Flex from '../../components/atoms/Flex.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../routes/routes.ts';

function SettingPagePrivilegesPage() {
  const page = useSettingPrivilegePage();
  const breadcrumb: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('setting'),
      path: ROUTES.SETTING_PRIVILEGE(),
    },
    {
      label: t('privilege_setting'),
      path: ROUTES.SETTING_PRIVILEGE(),
    },
  ];
  return (
    <PageContainer>
      <PageTitle breadcrumb={breadcrumb} title={t('privilege_setting')} />
      <div>
        {page.listRolePrivileges.map((item, i) => (
          <Card key={i}>
            <CardBody>
              <div>{item.role}</div>
            </CardBody>
            <Divider />
            <CardBody>
              <div>
                <Grid grid={4} gap={'sm'}>
                  {page.listPrivileges.map((privilege, idx) => (
                    <div
                      className={'cursor-pointer'}
                      key={idx + i}
                      onClick={() => page.onSelectPrivilege(privilege, item.role)}
                    >
                      <Card
                        className={twMerge(
                          'active:bg-primary-light/5 border hover:border-primary-main duration-200 ',
                          item.privileges.includes(privilege) &&
                            'border-primary-main border bg-primary-main/5 text-primary-main ',
                        )}
                      >
                        <CardBody>{t('privilege.' + privilege)}</CardBody>
                      </Card>
                    </div>
                  ))}
                </Grid>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Flex justify={'end'}>
        <div>
          <Button
            onClick={page.onSubmitSettingPrivilege}
            loading={page.loadingSubmit}
            disable={page.disableButtonSubmit}
          >
            {t('submit')}
          </Button>
        </div>
      </Flex>
    </PageContainer>
  );
}

export default SettingPagePrivilegesPage;
