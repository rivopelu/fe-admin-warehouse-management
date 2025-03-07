import { ASSETS } from '../../constants/assets.ts';

export function BrandLogo(props: IProps) {
  return <img src={ASSETS.LG_BRAND_WITH_NAME} alt={'brand logo'} className={`h-8 ${props.className}`} />;
}

interface IProps {
  className?: string;
}
