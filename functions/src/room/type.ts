import { UserId } from "@/user/type";

export type RoomId = string;
export type Word = string;
export type History = {
  userId: UserId;
  text: Word;
};
export type Room = {
  id: RoomId;
  history: History[];
  word: Word;
};
export const isRoom = (obj: any): obj is Room => {
  return (
    obj.id !== undefined && obj.history !== undefined && obj.word !== undefined
  );
};
