import camelCase from "../camelCase";

describe("camelCase", () => {
  it('should replace hyphens and the proceeding letter with a capital letter"', () => {
    const str = "kebabs-are-lovely";
    expect(camelCase(str)).toBe("kebabsAreLovely");
  });

  it("should remove any spaces from the string", () => {
    const str = "a String With Spaces";
    expect(camelCase(str)).toBe("aStringWithSpaces");
  });

  it("should remove special characters from the string", () => {
    const str = "symbols Can@Be-an%noying";
    expect(camelCase(str)).toBe("symbolsCanBeAnnoying");
  });

  it("should create a camel case string from a normal sentence", () => {
    const str = "Once upon a time there was a wolf";
    expect(camelCase(str)).toBe("onceUponATimeThereWasAWolf");
  });

  it("should throw an error if a string is not provided", () => {
    expect(() => camelCase({})).toThrowError(TypeError);
  });
});
