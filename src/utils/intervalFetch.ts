export const fetchMoreThanUThink = (cb: () => void, timeout: number) => {
  setInterval(cb, timeout);
};
