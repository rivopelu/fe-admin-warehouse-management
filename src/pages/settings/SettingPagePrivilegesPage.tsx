import PageContainer from '../../components/atoms/PageContainer.tsx';
import useSettingPrivilegePage from './useSettingPrivilegePage.ts';

function SettingPagePrivilegesPage() {
  const page = useSettingPrivilegePage();
  return (
    <PageContainer>
      <div>
        {page.listPrivileges.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </PageContainer>
  );
}

export default SettingPagePrivilegesPage;
