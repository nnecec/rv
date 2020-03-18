let idCount = 1;

export const getQuotes = (count) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const custom = {
      id: `G${idCount++}`,
    };

    return custom;
  });