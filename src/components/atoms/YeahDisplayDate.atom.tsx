import { useEffect, useState } from "react";
import DisplayDateModel from "../../shared/models";

export const YeahDisplayDate: React.FC = () => {
  const [date, setDate] = useState<DisplayDateModel>();

  useEffect(() => {
    setDate(DisplayDateModel.create(new Date()));
  }, []);

  return (
    <div className="flex flex-row flex-nowrap justify-center items-center">
      <div className="font-bold text-4xl pr-2">{date?.day}</div>
      <div className="flex flex-col flex-nowrap justify-center items-start">
        <div className="text-sm text-slate-600">{date?.month}</div>
        <div className="text-xs text-slate-600">{date?.year}</div>
      </div>
    </div>
  );
};
