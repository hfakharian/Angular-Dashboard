import { CollectionResultMessage } from "./CollectionResultMessage";

export class CollectionResultStatus {
    authent: boolean | null = null;
    success: boolean | null = null;
    messages: CollectionResultMessage[] = [];
}