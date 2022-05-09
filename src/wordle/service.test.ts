import { describe, it, expect } from "vitest";
import { compareWord } from "./index";

describe("compareが正しく動作するか", () => {
  it("完全一致", () => {
    const expectRes = "🟩🟩🟩🟩🟩";

    const res = compareWord("りんごあめ", "りんごあめ");
    expect(res).toBe(expectRes);
  });
  it("部分一致-1", () => {
    const expectRes = "🟩🟩🟩🟨🟨";

    const res = compareWord("りんごあめ", "りんごめあ");
    expect(res).toBe(expectRes);
  });
  it("部分一致-2", () => {
    const expectRes = "🟨🟨⬛️⬛️⬛️";

    const res = compareWord("りんごあめ", "あめがすき");
    expect(res).toBe(expectRes);
  });
  it("部分一致-3", () => {
    const expectRes = "⬛️🟩⬛️⬛️⬛️";

    const res = compareWord("りんごあめ", "んんんんん");
    expect(res).toBe(expectRes);
  });
  it("部分一致-4", () => {
    const expectRes = "🟩🟩🟨⬛️🟨";

    const res = compareWord("りんごあめ", "りんめんご");
    expect(res).toBe(expectRes);
  });
  it("無一致", () => {
    const expectRes = "⬛️⬛️⬛️⬛️⬛️";

    const res = compareWord("りんごあめ", "いいいいい");
    expect(res).toBe(expectRes);
  });
  it("文字が少ない", () => {
    const expectRes = "🟩⬛️⬛️⬛️⬛️";

    const res = compareWord("りんごあめ", "りい");
    expect(res).toBe(expectRes);
  });
  it("文字が多い", () => {
    const expectRes = "🟩⬛️⬛️⬛️⬛️";

    const res = compareWord("りんごあめ", "りいいいいめ");
    expect(res).toBe(expectRes);
  });
});
