export type UserId = string;
export type UserName = string;
export type UserRate = number;
export type User = {
  id: UserId;
  name: UserName;
  rate: UserRate;
};
export const isUser = (obj: any): obj is User => {
  return (
    obj.id !== undefined && obj.name !== undefined && obj.rate !== undefined
  );
};
