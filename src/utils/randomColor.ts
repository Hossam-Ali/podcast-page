import randomColor from 'randomcolor';

export const handleRandomColor = (data: any, unique: string) => {
  const assignedColors = [] as any;

  data.map((value: any) => {
    const isExist = assignedColors?.find(
      (val: any) => val.item[unique] === value[unique]
    );
    if (isExist?.color) {
      assignedColors.push({
        color: isExist.color,
        item: value,
      });
    } else {
      assignedColors.push({
        color: randomColor({
          luminosity: 'light',
          hue: 'blue',
        }),
        item: value,
      });
    }
  });
  return assignedColors;
};
