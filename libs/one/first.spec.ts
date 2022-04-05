type TestOne = {
  name: string;
};

describe("Test first types", () => {
  it("test ok", () => {
    expect(true).toBe(true);
  });
  it("test fail", () => {
    expect(false).toBe(true);
  });
});
