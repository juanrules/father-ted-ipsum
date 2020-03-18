export const paragrahpsCutter = (contentArray: string[], chunk: number) => {
  const result = [];
  while (contentArray.length) {
    result.push(contentArray.splice(0, chunk));
  }
  return result;
};

export const latinWordsMixer = (content: string[]): string[] =>
  content.reduce(
    (arr: string[], el, i) =>
      arr.concat(el, latinWords[Math.floor(Math.random() * latinWords.length)]),
    []
  );

export const filterContent = (
  content: string,
  removeLatinWords: boolean,
  removeBadWords: boolean
): string => {
  if (removeLatinWords) {
    content = badWordsRemover(content);
  }

  if (removeBadWords) {
    content = latinWordRemover(content);
  }

  return content;
};

const badWords = /\s?(feck|fecking|arse|arsing|fuck|fucking|ass|motherfucker|cunt|bitch|gobshite|dick)(\s|[^a-z])/gi;

const badWordsRemover = (content: string) => content.replace(badWords, " ");

const latinWords = [
  "consectetur adipiscing elit",
  "Fusce varius",
  "tellus nec luctus aliquet",
  "felis turpis efficitur tellus",
  "sit amet mollis lacus ",
  "Mauris erat ex",
  "elementum ut risus id",
  "consequat egestas diam",
  "Etiam non augue lacinia ",
  "Integer dictum elit erat",
  "eu pharetra dolor finibus nec",
  "Donec gravida scelerisque",
  "Fusce quis velit in",
  "Sed sed facilisis velit",
  "Phasellus a elit quis",
  "Sed est velit",
  "gravida ac congue a",
  "feugiat vitae augue",
  "Praesent faucibus ex",
  "Suspendisse placerat et",
  "Sed ultrices",
  "diam ac vehicula ultricies",
  "mauris eros feugiat mauris",
  "sit amet aliquam",
  "Vestibulum suscipit",
  "In hac habitasse platea",
  "In hendrerit diam urna",
  "ac rhoncus ex mollis at",
  "Donec egestas orci"
];

const latinWordRemover = (content: string): string => {
  latinWords.forEach(
    (el: string) =>
      (content = content.replace(new RegExp("(" + el + ")*", "gim"), ""))
  );
  return content;
};
