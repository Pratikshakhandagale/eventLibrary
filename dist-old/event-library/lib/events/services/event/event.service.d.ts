import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';
export declare class EventService {
    private userConfigService;
    private dataService;
    isEnroll: boolean;
    items: any;
    constructor(userConfigService: UserConfigService, dataService: DataService);
    /**
     * To user enrolled event list
     */
    getEnrollEvents(courseId: any, userId: any): import("rxjs").Observable<any>;
    /**
     * For Enroll/Unenroll to the event
     */
    enrollToEventPost(action: any, cId: any, uId: any): import("rxjs").Subscription;
}
