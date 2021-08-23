import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
export declare class AdvanceEventDetailComponent implements OnInit {
    translate: TranslateService;
    private timezoneCal;
    eventDetailItem: any;
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
    isTruncate: boolean;
    timezoneshort: string;
    constructor(translate: TranslateService, timezoneCal: TimezoneCal);
    ngOnInit(): void;
    truncateData(truncate: any): void;
    switchLang(lang: string): void;
}
