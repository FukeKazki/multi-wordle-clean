import { User } from "@/user/type";
import { Room, Word, RoomId } from "./type";

export class RoomEntity implements Room {
  readonly id: RoomId;
  readonly word: Word;
  users: User[];

  constructor(room: Room) {
    this.id = room.id;
    this.word = room.word;
    this.users = room.users;
  }

  addUser(user: User) {
    this.users.push(user);
    return this;
  }

  toRoom(): Room {
    return {
      id: this.id,
      word: this.word,
      users: this.users
    };
  }
}
