import { Room, RoomId } from "./type";

export interface RoomRepositoryInterface {
  createRoom: (room: Room) => Promise<void>;
  findRoom: (id: RoomId) => Promise<boolean>;
  getRoom: (id: RoomId) => Promise<Room | null>;
  updateRoom: (room: Room) => Promise<void>;
  deleteRoom: (id: RoomId) => Promise<void>;
}

export class RoomRepository implements RoomRepositoryInterface {
  async createRoom(room: Room): Promise<void> {}

  async findRoom(id: RoomId): Promise<boolean> {}

  async getRoom(id: RoomId): Promise<Room | null> {}

  async updateRoom(room: Room): Promise<void> {}

  async deleteRoom(id: RoomId): Promise<void> {}
}
