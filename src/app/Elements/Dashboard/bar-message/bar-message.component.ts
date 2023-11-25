import { Component,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BarMessageService } from './bar-message.service';
import { CollectionResultMessage } from 'src/app/Entities/Collections/CollectionResultMessage';

@Component({
  selector: 'app-bar-message',
  templateUrl: './bar-message.component.html',
  styleUrls: ['./bar-message.component.scss']
})
export class BarMessageComponent {
  
  @Input() hideDelay: number = 5000;
  messages: CollectionResultMessage[] = [];

  subject = new BehaviorSubject<CollectionResultMessage[]>([]);
  toasts$ = this.subject.asObservable();

  constructor(
    private barMessageService: BarMessageService,
  ) {
    this.subscribeToEvents();
   }

  ngOnInit(): void {
  }

  private subscribeToEvents(): void {
    this.barMessageService.messageStatus.subscribe((messages: CollectionResultMessage[]) => {
      messages.forEach(i =>{
        this.add(i);
      });
    });
  }

  add(message: CollectionResultMessage) {
    this.messages = [message, ...this.messages];
    this.subject.next(this.messages);

    setTimeout(() => {
      this.messages = this.messages.filter(v => v !== message);
      this.subject.next(this.messages);
    }, this.hideDelay);
  }

  remove(index: number) {
    this.messages = this.messages.filter((toast, i) => i !== index);
    this.subject.next(this.messages);
  }

  
}
