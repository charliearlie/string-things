import { camelCase } from "../../../dist/main";

describe("main", () => {
  it("should import", () => {
    expect(camelCase("Camel case me")).toBe("camelCaseMe");
  });
});
