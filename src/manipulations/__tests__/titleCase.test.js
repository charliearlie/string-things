import titleCase from "../titleCase";

describe("titleCase", () => {
  it("should turn camel case to title case", () => {
    expect(titleCase("someCamelCasedString")).toBe("Some Camel Cased String");
  });
});
