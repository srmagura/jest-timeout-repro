it(
  "waits",
  () => {
    return new Promise((resolve) => setTimeout(resolve, 15000));
  },
  1000 * 1000
);
