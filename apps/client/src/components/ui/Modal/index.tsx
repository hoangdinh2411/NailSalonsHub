import { HTMLAttributes } from 'react';
import './Modal.scss';
interface IProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  routerBack?: boolean;
  placement?: 'center' | 'left' | 'right'; // default middle
}
const Modal = ({
  children,
  placement = 'center',
  open = false,
  onClose,
  className = '',
  ...rest
}: IProps) => {
  return (
    <div className={`modal ${open ? 'open' : ''} ${className}`} {...rest}>
      <div className='modal__overlay' onClick={onClose}></div>
      <div className={`modal__body ${placement}`}>{children}</div>
    </div>
  );
};

export default Modal;
