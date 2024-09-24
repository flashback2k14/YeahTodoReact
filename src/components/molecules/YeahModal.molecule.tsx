import { useRef, useEffect } from "react";
import { YeahCloseIcon } from "../atoms";

export type ModalProps = {
  openModal: boolean;
  closeModal: VoidFunction;
  children: React.ReactNode;
};

export const YeahModal: React.FC<ModalProps> = ({ openModal, closeModal, children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      className="shadow-2xl w-80 max-w-full rounded p-4 backdrop:bg-gray-900/60"
      ref={ref}
      onCancel={closeModal}>
      <div>
        <YeahCloseIcon
          classNames="absolute top-3 right-3 cursor-pointer rounded-full hover:ring-2 focus:ring-2"
          clickFn={closeModal}
        />
        <div>{children}</div>
      </div>
    </dialog>
  );
};
