export const formatData = (data: string | undefined): string => {
  if (data) {
    const [year, month, day] = data.split("-");
    return `${day}/${month}/${year}`;
  } else {
    return "";
  }
};
