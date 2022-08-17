import {
  convertRatingToPercentage,
  getRatingBadgeColor,
  getReleaseYear,
} from "../MediaList.utils";

describe("MediaList utils tests", () => {
  describe("convertRatingToPercentage()", () => {
    it("should convert a number to percentage format", () => {
      expect(convertRatingToPercentage(8.1)).toBe("81%");
    });
    it("should return N/A when there is no rating", () => {
      expect(convertRatingToPercentage()).toBe("N/A");
    });
  });

  describe("getRatingBadgeColor()", () => {
    it("should return green if value is > 8", () => {
      expect(getRatingBadgeColor(8.1)).toBe("green");
    });
    it("should return yellow if value is > 6", () => {
      expect(getRatingBadgeColor(6.1)).toBe("yellow");
    });
    it("should return red if value is 6 or below", () => {
      expect(getRatingBadgeColor(6)).toBe("red");
    });
    it("should return #01b4e4 if no value is passed", () => {
      expect(getRatingBadgeColor()).toBe("#01b4e4");
    });
  });

  describe("getReleaseYear()", () => {
    it("should return only the year", () => {
      expect(getReleaseYear("2022-10-4")).toBe("2022");
    });
    it("should return N/A when there is no release date", () => {
      expect(getReleaseYear()).toBe("N/A");
    });
  });
});
