import { expect } from "chai";
import { describe } from "mocha";
import { artGallery } from "./artGallery.js";

describe("artGallery", function () {
  describe("addArtwork", function () {
    it("should add artwork successfully with valid inputs", function () {
      const result = artGallery.addArtwork(
        "Starry Night",
        "30 x 40",
        "Van Gogh"
      );
      expect(result).to.equal(
        "Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40."
      );
    });

    it("should throw an error for non-string title", function () {
      expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for non-string artist", function () {
      expect(() =>
        artGallery.addArtwork("Starry Night", "30 x 40", 123)
      ).to.throw("Invalid Information!");
    });

    it("should throw an error for empty title", function () {
      expect(() => artGallery.addArtwork("", "30 x 40", "Van Gogh")).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for invalid dimensions format", function () {
      expect(() =>
        artGallery.addArtwork("Starry Night", "30 by 40", "Van Gogh")
      ).to.throw("Invalid Dimensions!");
    });

    it("should throw an error for non-allowed artist", function () {
      expect(() =>
        artGallery.addArtwork("Starry Night", "30 x 40", "Da Vinci")
      ).to.throw("This artist is not allowed in the gallery!");
    });
  });

  describe("calculateCosts", function () {
    it("should calculate total costs without sponsor", function () {
      const result = artGallery.calculateCosts(1000, 500, false);
      expect(result).to.equal("Exhibition and insurance costs are 1500$.");
    });

    it("should calculate total costs with sponsor", function () {
      const result = artGallery.calculateCosts(1000, 500, true);
      expect(result).to.equal(
        "Exhibition and insurance costs are 1350$, reduced by 10% with the help of a donation from your sponsor."
      );
    });

    it("should throw an error for negative exhibition costs", function () {
      expect(() => artGallery.calculateCosts(-1000, 500, false)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for negative insurance costs", function () {
      expect(() => artGallery.calculateCosts(1000, -500, false)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for non-boolean sponsor", function () {
      expect(() => artGallery.calculateCosts(1000, 500, "yes")).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for non-number exhibition costs", function () {
      expect(() => artGallery.calculateCosts("1000", 500, false)).to.throw(
        "Invalid Information!"
      );
    });
  });

  describe("organizeExhibits", function () {
    it("should organize exhibits with artworks per space >= 5", function () {
      const result = artGallery.organizeExhibits(20, 4);
      expect(result).to.equal(
        "You have 4 display spaces with 5 artworks in each space."
      );
    });

    it("should organize exhibits with artworks per space < 5", function () {
      const result = artGallery.organizeExhibits(12, 4);
      expect(result).to.equal(
        "There are only 3 artworks in each display space, you can add more artworks."
      );
    });

    it("should throw an error for negative artworks count", function () {
      expect(() => artGallery.organizeExhibits(-20, 4)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for negative display spaces count", function () {
      expect(() => artGallery.organizeExhibits(20, -4)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for non-number artworks count", function () {
      expect(() => artGallery.organizeExhibits("20", 4)).to.throw(
        "Invalid Information!"
      );
    });

    it("should throw an error for non-number display spaces count", function () {
      expect(() => artGallery.organizeExhibits(20, "4")).to.throw(
        "Invalid Information!"
      );
    });
  });
});
