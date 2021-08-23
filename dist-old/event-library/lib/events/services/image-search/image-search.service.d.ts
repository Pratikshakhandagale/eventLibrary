import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
export declare class ImageSearchService {
    private userConfigService;
    private dataService;
    constructor(userConfigService: UserConfigService, dataService: DataService);
    /**
   * For get event detail
   */
    getEditMode(): import("rxjs").Observable<any>;
    getMyImages(request: any): import("rxjs").Observable<any>;
    createMediaAsset(req?: object): import("rxjs").Observable<any>;
    uploadMedia(req: any, assetId: any): import("rxjs").Observable<any>;
}
