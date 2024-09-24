import {
  YeahDisplayDate,
  YeahDisplayTime,
  YeahFooter,
  YeahHeader,
  YeahMain,
  YeahTodoList,
} from "../atoms";
import { YeahOpenInfo, YeahAddNewItem } from "../molecules";

export const YeahApp: React.FC = () => {
  return (
    <>
      <YeahHeader>
        <YeahDisplayDate />
        <YeahDisplayTime />
      </YeahHeader>

      <YeahMain>
        <YeahTodoList />
      </YeahMain>

      <YeahFooter>
        <YeahOpenInfo />
        <YeahAddNewItem />
      </YeahFooter>
    </>
  );
};
