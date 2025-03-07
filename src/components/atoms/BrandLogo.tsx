import { ASSETS } from '../../constants/assets.ts';

export function BrandLogo() {
  return <img src={ASSETS.LG_BRAND_WITH_NAME} alt={'brand logo'} className={'h-8'} />;
}
