import { millisToMinutesAndSeconds } from "./helpers";

import { tracks } from "tests/mocks/albumDetail";

describe("millisToMinutesAndSeconds", () => {
  test(`should convert milliseconds to minute:second`, () => {
    const expected = ["3:24", "3:38", "6:57"];
    tracks
      .slice(0, 3)
      .forEach((t, i) =>
        expect(millisToMinutesAndSeconds(t.duration_ms)).toBe(expected[i])
      );
  });
});
