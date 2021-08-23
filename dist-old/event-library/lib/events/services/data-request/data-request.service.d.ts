import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestParam } from '../../interfaces';
import { UserConfigService } from '../userConfig/user-config.service';
export declare class DataService {
    private userConfigService;
    private http;
    /**
       * Contains base Url for api end points
       */
    baseUrl: any;
    constructor(userConfigService: UserConfigService, http: HttpClient);
    /**
   * for preparing headers
   */
    private getHeader;
    /**
   * for making post api calls
   * @param RequestParam requestParam interface
   */
    post(requestParam: RequestParam): Observable<any>;
    /**
   * for making get api calls
   *
   * @param requestParam interface
   */
    get(requestParam: RequestParam): Observable<any>;
    /**
  * for making post api calls
  * @param RequestParam requestParam interface
  */
    patch(requestParam: RequestParam): Observable<any>;
}
