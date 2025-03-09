import PageContainer from '../../components/atoms/PageContainer.tsx';
import useSettingPrivilegePage from './useSettingPrivilegePage.ts';
import { Card, CardBody } from '../../components/atoms/Card.tsx';
import Divider from '../../components/atoms/Divider.tsx';
import Grid from '../../components/atoms/Grid.tsx';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/atoms/Button.tsx';
import { t } from 'i18next';

function SettingPagePrivilegesPage() {
  const page = useSettingPrivilegePage();
  return (
    <PageContainer>
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
                          'active:bg-primary-light/5 hover:border-primary-main duration-200 ',
                          item.privileges.includes(privilege) &&
                            'border-primary-main border bg-primary-main/5 text-primary-main font-semibold ',
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
        <div>
          <Button>{t('submit')}</Button>
        </div>
      </div>
    </PageContainer>
  );
}

export default SettingPagePrivilegesPage;
