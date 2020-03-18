const selectElement = (element: any): void => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);

  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export const copyAll = async (selector: string, callback: any) => {
  selectElement(document.querySelector(selector));
  document.execCommand("copy");
  callback(true);

  setTimeout(() => callback(false), 2000);
};
