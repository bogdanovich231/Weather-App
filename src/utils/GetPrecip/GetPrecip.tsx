export const getPrecipitation = (rain: any, snow: any) => {
  const timeIntervals = ['1h', '3h', '6h', '12h', '24h'];

  for (let interval of timeIntervals) {
    if (rain?.[interval]) {
      return rain[interval];
    }
    if (snow?.[interval]) {
      return snow[interval];
    }
  }

  return 0;
};
