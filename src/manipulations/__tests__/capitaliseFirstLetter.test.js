import capitaliseFirstLetter from "../capitaliseFirstLetter";

describe("capitaliseFirstLetter", () => {
  it('should capitalise the first letter"', () => {
    const str = "london";
    expect(capitaliseFirstLetter(str)).toBe("London");
  });
});
