import unescape from "../unescape";

describe("unescape", () => {
  it("should replace &amp; with an ampersand", () => {
    const str = "Strings &amp; things";
    expect(unescape(str)).toBe("Strings & things");
  });

  it("should replace &lt; with <", () => {
    const str = "Tottenham &lt; Arsenal";
    expect(unescape(str)).toBe("Tottenham < Arsenal");
  });

  it("should replace multiple in one sentence", () => {
    const str = `&amp; &lt; &gt; &quot; &#039;`;
    expect(unescape(str)).toBe(`& < > \" '`);
  });
});
