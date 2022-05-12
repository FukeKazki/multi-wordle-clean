import { lineClient } from "@/external/line";
import { RoomService } from "@/room/RoomService";
import { compareWord, generateWord } from "@/wordle";

export const textUseCase = async (
  text: string,
  userId: string,
  groupId: string,
  roomService: RoomService
): Promise<string | undefined> => {
  if (text === "ゲーム開始") {
    const room = roomService.createRoom({
      id: groupId,
      history: [],
      word: generateWord()
    });
    return "ゲーム開始！";
  }

  const room = await roomService.getRoom(groupId);
  if (!room) return;

  if (text === room.word) {
    // 正解のとき
    const profile = await lineClient.getGroupMemberProfile(groupId, userId);
    await roomService.deleteRoom(groupId);
    return `🟩🟩🟩🟩🟩\nゲーム終了！${profile.displayName}さんおめでとう！`;
    // ゲーム終了
  } else {
    // 不正解のとき
    const wordle = compareWord(room.word, text);
    return wordle;
  }
};
