import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
export declare class EventCreateService {
    private userConfigService;
    private dataService;
    private sbToastService;
    constructor(userConfigService: UserConfigService, dataService: DataService, sbToastService: SbToastService);
    /**
     * For get event form config
     */
    getEventFormConfig(): import("rxjs").Observable<any>;
    /**
   * For post event data
   */
    createEvent(formData: any): import("rxjs").Observable<any>;
    updateEvent(formData: any): import("rxjs").Observable<any>;
    /**
     * For publish event
     */
    publishEvent(identifier: any): import("rxjs").Observable<any>;
}
