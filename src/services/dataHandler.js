/**
 *
 * @param {object} data
 */
export const getEpisode = data =>
  data && data?.[Math.floor(Math.random() * 23) + 1];
