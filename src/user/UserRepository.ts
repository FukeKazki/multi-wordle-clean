import { User, UserId } from "./type";

export interface UserRepositoryInterface {
  registerUser: (user: User) => Promise<void>;
  findUser: (id: UserId) => Promise<boolean>;
  getUser: (id: UserId) => Promise<User | null>;
  updateUser: (user: User) => Promise<void>;
}

export class UserRepository implements UserRepositoryInterface {
  async registerUser(user: User) {}

  async findUser(id: UserId): Promise<boolean> {}

  async getUser(id: UserId): Promise<User | null> {}

  async updateUser(user: User): Promise<void> {}
}
