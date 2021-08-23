import { EventLibraryService } from '../../../event-library.service';
export declare class UserConfigService {
    private eventLibraryService;
    userId: string;
    constructor(eventLibraryService: EventLibraryService);
    getConfigUrl(): any;
}
