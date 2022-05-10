import { User, UserId, UserName, UserRate } from "./type";

export class UserEntity implements User {
  readonly id: UserId;
  readonly name: UserName;
  rate: UserRate;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.rate = user.rate;
  }

  updateRate(rate: UserRate) {
    this.rate = rate;
    return this;
  }

  toUser(): User {
    return {
      id: this.id,
      name: this.name,
      rate: this.rate
    };
  }
}
