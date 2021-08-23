import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
export declare class EventDetailService {
    private userConfigService;
    private dataService;
    constructor(userConfigService: UserConfigService, dataService: DataService);
    /**
     * For get event detail
     */
    getEvent(identifier: any): import("rxjs").Observable<any>;
    /**
     * For enroll/unenroll user
     */
    enrollUser(cId: any, uId: any): void;
}
