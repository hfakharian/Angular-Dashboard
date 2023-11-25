import { Injectable, EventEmitter } from '@angular/core';
import { CollectionResultMessage } from '../../../Entities/Collections/CollectionResultMessage';

@Injectable({
  providedIn: 'root'
})
export class BarMessageService  {
  messageStatus: EventEmitter<CollectionResultMessage[]> = new EventEmitter();

  constructor(
  ) {
  }

  messageStatusEvent(messages: CollectionResultMessage[]) {
    this.messageStatus.emit(messages);
  }

}
