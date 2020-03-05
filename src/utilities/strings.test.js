import { filterContent } from "./strings";

describe("Testing the  string utils", () => {
  test("filterContent", () => {
    const sampleText =
      "Ted, if you had three wishes, what would they be? Three wishes? Feck, I don't know consectetur adipiscing elit";

    const expectedTextWithNoLatinWords =
      "Ted, if you had three wishes, what would they be? Three wishes? Feck, I don't know ";

    const expectedTextNoBadWords =
      "Ted, if you had three wishes, what would they be? Three wishes?  I don't know consectetur adipiscing elit";

    const expectedTextNoBadWordsNoLatinWords =
      "Ted, if you had three wishes, what would they be? Three wishes?  I don't know ";

    const textNoLatinWords = filterContent(sampleText, false, true);
    const textNoBadWords = filterContent(sampleText, true, false);
    const textNoBadWordsNoLatinWords = filterContent(sampleText, true, true);

    expect(textNoLatinWords).toBe(expectedTextWithNoLatinWords);
    expect(textNoBadWords).toBe(expectedTextNoBadWords);
    expect(textNoBadWordsNoLatinWords).toBe(expectedTextNoBadWordsNoLatinWords);
  });
});
