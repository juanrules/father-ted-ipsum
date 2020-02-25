export const paragrahpsCutter = (contentArray, chunk) => {
  const result = [];
  while (contentArray.length) {
    result.push(contentArray.splice(0, chunk));
  }
  return result;
};

const badWords = / feck | feck| arse | arse| fuck | arse | fuck | ass | motherfucker | cunt | bitch | gobshite | dick /gi;

const badWordsRemover = content => content.replace(badWords, " ");

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
  "Donec egestas orci",
  "consectetur adipiscing elit",
  "Pellentesque tempus fringilla elit",
  "nec sodales nibh consequat at",
  "Vivamus eget ex vitae",
  "Vivamus ante arcu",
  "cursus et pharetra sit amet",
  "efficitur ac ante",
  "Etiam tempor quis orci at tempor",
  "Suspendisse tempor",
  "Morbi eu massa posuere",
  "pharetra lacus id",
  "elementum libero",
  "Aliquam erat volutpat",
  "Suspendisse pellentesque",
  "Cras semper",
  "nisl non egestas molestie",
  "lacus nisl semper magna",
  "eu dapibus diam urna non felis",
  "Etiam feugiat iaculis lorem",
  "non viverra dolor sollicitudin in",
  "Pellentesque sagittis",
  "at venenatis dolor fringilla vel",
  "Aenean et bibendum nulla",
  "Morbi justo augue",
  "vestibulum at ex eu",
  "malesuada luctus mauris",
  "Nullam enim neque",
  "lacinia eget elit et",
  "consequat vehicula felis",
  "Duis feugiat neque neque",
  "Etiam in nulla quis tellus venenatis ",
  "laoreet convallis et orci",
  "Nullam aliquet enim tortor",
  "eget elementum metus vulputate non",
  "Phasellus eu interdum risus",
  "Etiam efficitur ex sit ",
  "amet sapien ornare",
  "sit amet feugiat diam bibendum",
  "Suspendisse lobortis ",
  "ante sit amet arcu loborti",
  "vitae gravida eros lacinia",
  "Proin nibh ligul",
  "commodo eget placerat sit ame",
  "posuere et risus",
  "Morbi lobortis nunc vel ",
  "magna ornare viverra",
  "Pellentesque nibh metu",
  "hendrerit at ultricies ve",
  "vulputate sed elit",
  "Quisque pellentesque",
  "aliquet justo eu fringilla",
  "In sit amet imperdiet lorem",
  "Pellentesque blandit dolor vitae ",
  "tellus accumsan sagittis",
  "Vestibulum imperdiet placerat vehicula",
  "Nullam ut iaculis libero",
  "Aenean lobortis ultricies ",
  "lorem eu pellentesque",
  "Aliquam rutrum libero nis",
  "ac ultricies risus facilisis nec",
  "Sed est ero",
  "rhoncus porttitor tincidunt qui",
  "dictum in dolor"
];

const latinWordsMixer = content => {
  return content.reduce(function(arr, el, i) {
    return arr.concat(el, latinWords[i]);
  }, []);
};

/**
 *
 * @param {*} content
 * @param {*} hasBadWords
 * @param {*} hasLatinWords
 */
export const filterContent = (content, hasBadWords, hasLatinWords) => {
  if (!hasBadWords) {
    content = badWordsRemover(content);
  }

  if (!hasLatinWords) {
    content = latinWordsMixer(content.split(/[.]/g)).join(". ");
  }

  return content;
};
