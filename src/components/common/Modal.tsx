import Image from 'next/image';

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 grid place-items-center ${
        show ? 'visible opacity-100' : 'invisible opacity-0'
      } animate-open-modal z-50`}
    >
      <div className="relative">
        {children}
        <div className="absolute top-4 right-4 bg-main-background rounded-full w-8 h-8 z-50">
          <button
            className="grid place-items-center w-full h-full z-51 text-white"
            onClick={onClose}
          >
            <Image
              alt="close-modal"
              src="/icons/cross.svg"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
