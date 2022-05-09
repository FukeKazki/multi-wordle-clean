import { User } from "./type";
import { UserEntity } from "./UserEntity";
import { UserRepositoryInterface } from "./UserRepository";

export class UserService {
  // repositoryをうけとる
  private userRepository: UserRepositoryInterface;

  constructor(ur: UserRepositoryInterface) {
    this.userRepository = ur;
  }

  async registerUser(user: User) {
    const isExit = await this.userRepository.findUser(user.id);
    if (!isExit) {
      await this.userRepository.registerUser(user);
    }
    return new UserEntity(user);
  }
}

/*
servicesはドメインとデータアクセスのロジックを管理します
*/
