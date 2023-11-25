import { BaseEntity } from "../Base/BaseEntity";
import { Gender } from "./Enum/Gender";
import { UserStatus } from "./Enum/UserStatus";
import { UserType } from "./Enum/UserType";
import { UserDetail } from "./UserDetail";
import { UserToken } from "./UserToken";
import { UserUnitRole } from "./UserUnitRole";

export class User extends BaseEntity<number> {
    userType: UserType = UserType.Owner;
    userStatus: UserStatus = UserStatus.Active;
    gender: Gender | null = Gender.Male;
    nationalCode: string | null = null;
    firstName: string | null = null;
    lastName: string | null = null;
    email: string | null = null;
    mobile: string | null = null;
    username: string | null = null;
    password: string | null = null;
    dateChangePassword: string | null = null;
    dateForgotPassword: string | null = null;
    userDetail: UserDetail | null = null;
    userTokens: UserToken[] | null = null;
    userUnitRoles: UserUnitRole[] | null = null;
    //fileComments: FileComment[] | null;
}