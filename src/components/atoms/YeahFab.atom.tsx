import { YeahFabCloseIcon, YeahFabOpenIcon } from ".";
import { AddClickFunction, IsOpenProp } from "../../shared";

export const YeahFab: React.FC<IsOpenProp & AddClickFunction> = ({ isOpen, clickFn }) => {
  return (
    <div
      className="flex justify-center items-center w-12 h-12 cursor-pointer bg-black rounded-full z-50 shadow-2xl hover:shadow-3xl hover:scale-110"
      onClick={clickFn}
    >
      <div className="text-white text-3xl">
        {isOpen ? <YeahFabCloseIcon /> : <YeahFabOpenIcon />}
      </div>
    </div>
  );
};
