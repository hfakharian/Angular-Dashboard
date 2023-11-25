import { CollectionResultStatus } from "./CollectionResultStatus";

export class CollectionResult<T> {
    status: CollectionResultStatus | null = null;
    result: T | null = null;
}