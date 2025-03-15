import { JSX, ReactNode, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import IconButton from '../atoms/IconButton.tsx';

export default function PopupModal(props: IProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && props.onClose) {
        props.onClose();
      }
    }

    if (props.open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = ''; // Ensure cleanup
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.open, props.onClose]);

  if (!props.open) return null;

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget && props.onClose) {
      props.onClose();
    }
  }

  return (
    <div
      className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-black/20 backdrop-blur-[4px] z-[999]"
      onClick={handleBackdropClick}
    >
      <div className="absolute top-4 right-4" style={{ zIndex: 999 }}>
        <IconButton onClick={props.onClose}>
          <MdClose />
        </IconButton>
      </div>
      {props.children || props.component || null}
    </div>
  );
}

interface IProps {
  children?: ReactNode;
  component?: JSX.Element;
  onClose?: () => void;
  open?: boolean;
}
