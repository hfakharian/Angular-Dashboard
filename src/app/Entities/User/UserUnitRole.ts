import { Unit } from "./Unit";
import { User } from "./User ";

export class UserUnitRole {
    userID: number = 0;
    unitID: number = 0;
    roleID: number = 0;
    isAccepted: boolean = false;
    user: User | null = null;
    unit: Unit | null = null;
    //role: Role | null = null;
}