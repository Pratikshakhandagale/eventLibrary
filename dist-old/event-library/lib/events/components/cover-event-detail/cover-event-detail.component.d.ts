import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event/event.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { DataService } from '../../services/data-request/data-request.service';
import { TranslateService } from '@ngx-translate/core';
export declare class CoverEventDetailComponent implements OnInit {
    private router;
    private eventService;
    private timezoneCal;
    private dataService;
    translate: TranslateService;
    eventDetailItem: any;
    userData: string;
    isOwner: boolean;
    labelMessages: {
        lbl: {
            type: string;
            audience: string;
            eventtype: string;
            startdate: string;
            previous: string;
            next: string;
            search: string;
            changefilters: string;
            reset: string;
            apply: string;
            by: string;
            datetime: string;
            join: string;
            online: string;
            offline: string;
            pages: string;
            collaborators: string;
            dialcode: string;
            onlineproviderdata: string;
            provider: string;
            createnewevent: string;
            startdatetime: string;
            enddatetime: string;
            registrationstartdate: string;
            registrationenddate: string;
            save: string;
            cancel: string;
            edit: string;
            retire: string;
            enroll: string;
            unenroll: string;
        };
    };
    eStart: any;
    eEnd: any;
    isEnrolled: boolean;
    items: any;
    timezoneshort: string;
    constructor(router: Router, eventService: EventService, timezoneCal: TimezoneCal, dataService: DataService, translate: TranslateService);
    retireEventId: EventEmitter<string>;
    ngOnInit(): void;
    /**
     * for show Date Time as per timezone
     */
    setDateTimeOnCover(): void;
    upate(identifier: any, versionKey: any): void;
    retireEvent(identifier: string): void;
}
