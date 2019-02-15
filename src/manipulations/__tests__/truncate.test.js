import truncate from "../truncate";

describe("truncate", () => {
  it("should finish at the end of the word after 20 characters", () => {
    const str = "A string that is quite long so it can be truncated";
    expect(truncate(str)).toBe("A string that is quite...");
  });

  it("should trim the end if the last character is a space", () => {
    const options = { length: 14, suffix: ",,," };
    const str = "A string that is quite long so it can be truncated";
    expect(truncate(str, options)).toBe("A string that is,,,");
  });

  it("should return the whole string if it's length is shorter than options.length", () => {
    const str = "string-things";
    expect(truncate(str)).toBe("string-things");
  });
});
