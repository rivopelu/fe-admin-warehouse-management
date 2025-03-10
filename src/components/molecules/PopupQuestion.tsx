import PopupModal from './PopupModal.tsx';
import { Card, CardBody } from '../atoms/Card.tsx';
import Flex from '../atoms/Flex.tsx';
import { t } from 'i18next';
import Divider from '../atoms/Divider.tsx';
import Button from '../atoms/Button.tsx';

function PopupQuestion(props: IProps) {
  function bodyModalSubmit() {
    return (
      <Card>
        <CardBody className={'p-10'}>
          <Flex gap={'xl'} align={'center'} direction={'col'} justify={'center'}>
            <div className={'text-xl '}>{props.title}</div>
            {props?.img && <img className={'h-32'} src={props.img} alt={'confirmation'} />}
          </Flex>
        </CardBody>
        <Divider />
        <CardBody>
          <Flex>
            <Button onClick={props.onClose} variant={'outlined'}>
              {t('cancel')}
            </Button>
            <Button onClick={props.onSubmit} loading={props.loading}>
              {t('submit')}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    );
  }

  return <PopupModal onClose={props.onClose} component={bodyModalSubmit()} open={props.open} />;
}

export default PopupQuestion;

interface IProps {
  open?: boolean;
  title: string;
  img?: string;
  onClose?: () => void;
  loading?: boolean;
  onSubmit?: () => void;
}
