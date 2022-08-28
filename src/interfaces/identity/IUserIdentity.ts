import { IToken } from "./IToken";
import { IUser } from "./IUser";

export interface IUserIdentity extends IUser {
  tokens? : IToken,
};
