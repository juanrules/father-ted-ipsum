import { latinWordsMixer } from "../utilities/strings";

/**
 *
 * @param {object} data
 */
export const getEpisode = data => {
  const episode = data?.[Math.floor(Math.random() * 23) + 1];

  // Inserting latin words into the content
  return {
    ...episode,
    content: latinWordsMixer(episode.content.split(/[.]/g)).join(" ")
  };
};
