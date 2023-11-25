import { BaseEntity } from "../Base/BaseEntity";
import { UnitStatus } from "./Enum/UnitStatus";
import { UnitType } from "./Enum/UnitType";
import { UnitDetail } from "./UnitDetail";

export class Unit extends BaseEntity<number> {
    unitType: UnitType = UnitType.Central;
    unitStatus: UnitStatus = UnitStatus.Active;
    title: string | null = null;
    comment: string | null = null;
    phone: string | null = null;
    address: string | null = null;
    website: string | null = null;
    email: string | null = null;
    mobile: string | null = null;
    unitDetail: UnitDetail | null = null;
}