'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import Modal from '.';
interface IModalWithUrlProps {
  children: React.ReactNode;
  placement?: 'center' | 'left' | 'right'; // default middle
}
const ModalWithUrl = ({ children, placement = 'center' }: IModalWithUrlProps) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!openModal) {
      setOpenModal(true);
    }
  }, []);
  const onDismiss = () => {
    setOpenModal(false);
    router.back();
  };
  return createPortal(
    <Modal open={openModal} onClose={onDismiss} placement={placement}>
      {children}
    </Modal>,
    document.getElementById('modal-root')!
  );
};

export default ModalWithUrl;
