import { useEffect, useState } from "react";
import { getTimeString } from "../../shared";

export const YeahDisplayTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date());
    }, 60 * 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className="font-bold text-4xl">{getTimeString(time)}</div>;
};
