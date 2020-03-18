import { latinWordsMixer } from "../utilities/strings";

export const getEpisode = (data: any): any => {
  const episode = data?.[Math.floor(Math.random() * 23) + 1];

  // Inserting latin words into the content
  return {
    ...episode,
    content: latinWordsMixer(episode.content.split(/[.]/g)).join(" ")
  };
};
