export const padLeft = (value: number): string => {
  return value < 10 ? "0" + value : value.toString();
};

export const getTimeString = (time: Date): string => {
  return `${padLeft(time.getHours())}:${padLeft(time.getMinutes())}`;
};
