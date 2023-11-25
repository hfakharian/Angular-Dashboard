import { Injectable } from '@angular/core';
import { BarLoadingService } from 'src/app/Elements/Dashboard/bar-loading/bar-loading.service';
import { BarMessageService } from 'src/app/Elements/Dashboard/bar-message/bar-message.service';
import { CollectionResultMessage } from 'src/app/Entities/Collections/CollectionResultMessage';
import { ResourceConfig } from 'src/app/Resources/resource';

@Injectable()
export class BaseComponent  {
    public resourceConfig = ResourceConfig;

    public loading:boolean = false;
    public message:CollectionResultMessage[] = [];

    constructor(
        public barLoadingService:BarLoadingService,
        public barMessageService:BarMessageService,
    ) { }
 
}
