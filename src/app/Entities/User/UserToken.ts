import { BaseEntity } from "../Base/BaseEntity";
import { UserTokenType } from "./Enum/UserTokenType";
import { Unit } from "./Unit";
import { User } from "./User ";

export class UserToken extends BaseEntity<number> {
    token: string | null = null;
    tokenKey: string | null = null;
    tokenGuid: string | null = null;
    userID: number = 0;
    tokenType: UserTokenType =  UserTokenType.Web;
    tokenCreate: string | null = null;
    tokenCreateUnix: number = 0;
    tokenExpire: string | null = null;
    tokenExpireUnix: number = 0;
    ipClient: string | null = null;
    ipServer: string | null = null;
    deviceOs: string | null = null;
    deviceType: string | null = null;
    browserType: string | null = null;
    user: User | null = null;
    unit: Unit | null = null;
}