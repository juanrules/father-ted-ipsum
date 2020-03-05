const selectElement = element => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
};

export const copyAll = async (selector, callback) => {
  selectElement(document.querySelector(selector));
  document.execCommand("copy");
  callback(true);

  setTimeout(() => callback(false), 2000);
};
