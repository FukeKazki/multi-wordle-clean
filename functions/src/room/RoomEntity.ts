import { Room, Word, RoomId, History } from "./type";

export class RoomEntity implements Room {
  readonly id: RoomId;
  readonly word: Word;
  history: History[];

  constructor(room: Room) {
    this.id = room.id;
    this.word = room.word;
    this.history = room.history;
  }

  addHistory(history: History) {
    this.history.push(history);
    return this;
  }

  toRoom(): Room {
    return {
      id: this.id,
      word: this.word,
      history: this.history
    };
  }
}
