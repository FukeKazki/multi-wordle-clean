import { isRoom, Room, RoomId } from "./type";
import { app } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
export interface RoomRepositoryInterface {
  createRoom: (room: Room) => Promise<void>;
  findRoom: (id: RoomId) => Promise<boolean>;
  getRoom: (id: RoomId) => Promise<Room | null>;
  updateRoom: (room: Room) => Promise<void>;
  deleteRoom: (id: RoomId) => Promise<void>;
}

export class RoomRepository implements RoomRepositoryInterface {
  private db: FirebaseFirestore.Firestore;

  constructor(client: app.App) {
    this.db = getFirestore(client);
  }

  async createRoom(room: Room) {
    const ref = this.db.collection("room");
    await ref.doc(room.id).set(room);
  }

  async findRoom(id: RoomId) {
    const ref = this.db.collection("room");
    const room = await ref.doc(id).get();
    return room.data() ? true : false;
  }

  async getRoom(id: RoomId) {
    const ref = this.db.collection("room");
    const room = await ref.doc(id).get();
    const data = room.data();
    if (!data) return null;
    if (isRoom(data)) return data;
    return null;
  }

  async updateRoom(room: Room) {
    const ref = this.db.collection("room");
    await ref.doc(room.id).set(room);
  }

  async deleteRoom(id: RoomId) {
    const ref = this.db.collection("room");
    await ref.doc(id).delete();
  }
}
