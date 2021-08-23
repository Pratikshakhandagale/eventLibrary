import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
export declare class EventListService {
    private userConfigService;
    private dataService;
    constructor(userConfigService: UserConfigService, dataService: DataService);
    /**
     * For get event list
     */
    getEventList(): import("rxjs").Observable<any>;
    getEventFilters(): void;
}
