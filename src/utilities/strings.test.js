import { filterContent } from "./strings";

describe("Testing the  string utils", () => {
  test("filterContent", () => {
    const sampleText =
      "Ted, if you had three wishes, what would they be? Three wishes? Feck, I don't know";
    const expectedTextWithLatinWords =
      "Ted, if you had three wishes, what would they be? Three wishes? Feck, I don't know consectetur adipiscing elit";

    const expectedTextNoBadWords =
      "Ted, if you had three wishes, what would they be? Three wishes?  I don't know consectetur adipiscing elit";
    const textNoLatinWords = filterContent(sampleText, true, true);
    const textNoBadWords = filterContent(sampleText, false, true);

    expect(textNoLatinWords).toBe(expectedTextWithLatinWords);
    expect(textNoBadWords).toBe(expectedTextNoBadWords);
  });
});
