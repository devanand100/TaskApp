export const secondToTime = (time) => {

  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor((time / 3600) % 12);

  return {hours , minutes , seconds}
};
