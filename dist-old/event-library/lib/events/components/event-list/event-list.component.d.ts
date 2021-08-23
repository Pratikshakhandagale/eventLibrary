import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
export declare class EventListComponent implements OnInit {
    private router;
    translate: TranslateService;
    list: any;
    paginateLimit: number;
    eventDetailData: EventEmitter<any>;
    redirectToDetail: EventEmitter<any>;
    p: any;
    redirection: any;
    constructor(router: Router, translate: TranslateService);
    ngOnInit(): void;
    navToEventDetail(res: any): void;
}
