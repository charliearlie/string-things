import kebabCase from "../kebabCase";

describe("kebabCase", () => {
  it('should replace capital letters in a string with "- and lower case"', () => {
    const str = "iWillBeAKebabCasedString";
    expect(kebabCase(str)).toBe("i-will-be-a-kebab-cased-string");
  });

  it("should remove any spaces from the string", () => {
    const str = "aString WithSpaces";
    expect(kebabCase(str)).toBe("a-string-with-spaces");
  });

  it("should remove special characters from the string", () => {
    const str = "symbolsCan@BeAn%noy-ing";
    expect(kebabCase(str)).toBe("symbols-can-be-annoying");
  });

  it("should remove numbers", () => {
    const str = "numericalString98";
    expect(kebabCase(str)).toBe("numerical-string");
  });

  it("should throw an error if a string is not provided", () => {
    expect(() => kebabCase({})).toThrowError(TypeError);
  });
});
