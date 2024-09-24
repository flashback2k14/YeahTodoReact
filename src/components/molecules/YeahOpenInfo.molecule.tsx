import { useState } from "react";
import { YeahInfoIcon } from "../atoms";
import { YeahModal } from ".";

export const YeahOpenInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed left-8 bottom-8 z-10 cursor-pointer hover:bg-fuchsia-100 hover:rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <YeahInfoIcon />
      </div>

      <YeahModal openModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h1 className="text-2xl mb-3">Yeah! ToDo</h1>
        <p className="font-bold mb-2">
          - created by{" "}
          <a
            className="no-underline outline-none hover:underline focus:underline visited:text-slate-600"
            href="https://github.com/flashback2k14"
            target="blank"
          >
            flashback2k14
          </a>
        </p>
        <p className="font-bold">
          - inspired by{" "}
          <a
            className="no-underline outline-none hover:underline focus:underline visited:text-slate-600"
            href="https://itunes.apple.com/de/app/listify-simple-todo-app/id1410668897?mt=8"
            target="blank"
          >
            Listify - Simple Todo App
          </a>
        </p>
      </YeahModal>
    </>
  );
};
