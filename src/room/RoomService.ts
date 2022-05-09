import { User } from "@/user/type";
import { RoomEntity } from "./RoomEntity";
import { RoomRepositoryInterface } from "./RoomRepository";
import { Room, RoomId } from "./type";

export class RoomService {
  private roomRepository: RoomRepositoryInterface;

  constructor(rr: RoomRepositoryInterface) {
    this.roomRepository = rr;
  }

  async createRoom(room: Room) {
    const isExit = await this.roomRepository.findRoom(room.id);
    if (!isExit) {
      await this.roomRepository.createRoom(room);
    }
    return new RoomEntity(room);
  }

  async deleteRoom(id: RoomId) {
    return this.roomRepository.deleteRoom(id);
  }

  async findRoom(id: RoomId) {
    return this.roomRepository.findRoom(id);
  }

  async getRoom(id: RoomId) {
    return this.roomRepository.getRoom(id);
  }

  async addUser(user: User, room: Room) {
    if (room.users.includes(user)) return;
    const newRoom = new RoomEntity(room).addUser(user).toRoom();
    await this.roomRepository.updateRoom(newRoom);
  }
}
