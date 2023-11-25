import { ResultMessageType } from "./Enum/ResultMessageType";

export class CollectionResultMessage {
    type: ResultMessageType = ResultMessageType.Danger;
    comment: string | null = null;
}