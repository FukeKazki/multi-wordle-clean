import { RoomService } from "@/room/RoomService";

export const textUseCase = async (
  text: string,
  userId: string,
  groupId: string,
  roomService: RoomService
): string | undefined => {
  if (text === "ゲーム開始") {
    const room = roomService.createRoom({
      id: groupId,
      users: [],
      word: "あああああ"
    });
    return "ゲーム開始！";
  }

  const isRoomExit = await roomService.findRoom(groupId);
  if (!isRoomExit) return;

  const room = await roomService.getRoom(groupId);
  if (!room) return;

  if (text === room.word) {
    // 正解のとき
    return "ゲーム終了";
  } else {
    // 不正解のとき
  }
};
