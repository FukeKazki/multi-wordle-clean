import { User } from "@/user/type";

export type RoomId = string;
export type Word = string;
export type Room = {
  id: RoomId;
  users: User[];
  word: Word;
};
