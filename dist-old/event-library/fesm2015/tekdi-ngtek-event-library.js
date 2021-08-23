import { Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, Component, ViewEncapsulation, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIzitoastService, NgxIziToastModule } from 'ngx-izitoast';
import { merge, get, includes, cloneDeep, forEach } from 'lodash-es';
import { __awaiter } from 'tslib';
import { CommonFormElementsModule } from 'common-form-elements';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { SuiModule } from 'ng2-semantic-ui/dist';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventLibraryService {
    /**
     * @param {?} translate
     * @param {?} config
     */
    constructor(translate, config) {
        this.translate = translate;
        this.config = config;
        this.apiUrlConfig = config.urlConfig;
        translate.setDefaultLang('en');
    }
}
EventLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventLibraryService.ctorParameters = () => [
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ["urlConfig",] }] }
];
/** @nocollapse */ EventLibraryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventLibraryService_Factory() { return new EventLibraryService(ɵɵinject(TranslateService), ɵɵinject("urlConfig", 8)); }, token: EventLibraryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EventLibraryService.prototype.apiUrlConfig;
    /**
     * @type {?}
     * @private
     */
    EventLibraryService.prototype.translate;
    /** @type {?} */
    EventLibraryService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EventLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-library',
                template: `
    <p>
      event-library works!
    </p>
  `
            }] }
];
/** @nocollapse */
EventLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/labels.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const labelMessages = {
    lbl: {
        type: ' Type',
        audience: 'Audience',
        eventtype: 'Event Type',
        startdate: 'Event Starting On',
        previous: 'Previous',
        next: 'Next',
        search: 'Search',
        changefilters: 'Change Filter',
        reset: 'Reset',
        apply: 'Apply',
        by: 'by',
        datetime: 'Event Date and Time',
        join: 'Join',
        online: 'Online',
        offline: 'Offline',
        pages: 'Pages',
        collaborators: 'Collaborators',
        dialcode: 'Dial Code',
        onlineproviderdata: 'Online Provider Data',
        provider: 'Provider',
        createnewevent: 'Create New Event',
        startdatetime: 'Start Date and Time',
        enddatetime: 'End Date and Time',
        registrationstartdate: 'Registration Start Date',
        registrationenddate: 'Registration End Date',
        save: 'Save',
        cancel: 'Cancel',
        edit: 'Edit',
        retire: 'Retire',
        enroll: 'Enroll',
        unenroll: 'Unenroll',
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/userConfig/user-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserConfigService {
    /**
     * @param {?} eventLibraryService
     */
    constructor(eventLibraryService) {
        this.eventLibraryService = eventLibraryService;
    }
    /**
     * @return {?}
     */
    getConfigUrl() {
        return this.eventLibraryService.apiUrlConfig;
    }
}
UserConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserConfigService.ctorParameters = () => [
    { type: EventLibraryService }
];
/** @nocollapse */ UserConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserConfigService_Factory() { return new UserConfigService(ɵɵinject(EventLibraryService)); }, token: UserConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UserConfigService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    UserConfigService.prototype.eventLibraryService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/data-request/data-request.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} userConfigService
     * @param {?} http
     */
    constructor(userConfigService, http) {
        this.userConfigService = userConfigService;
        this.http = http;
        /**
         * Contains base Url for api end points
         */
        this.baseUrl = this.userConfigService.getConfigUrl().host;
    }
    /**
     * for preparing headers
     * @private
     * @param {?=} headers
     * @return {?}
     */
    getHeader(headers) {
        /** @type {?} */
        const default_headers = {
            Accept: 'application/json',
            Authorization: 'Bearer key',
        };
        return default_headers;
    }
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    post(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode !== 'OK') {
                return throwError(data);
            }
            return of(data);
        })));
    }
    /**
     * for making get api calls
     *
     * @param {?} requestParam interface
     * @return {?}
     */
    get(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param
        };
        return this.http.get(requestParam.url, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return of(data);
        })));
    }
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    patch(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.patch(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode !== 'OK') {
                return throwError(data);
            }
            return of(data);
        })));
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: UserConfigService },
    { type: HttpClient }
];
/** @nocollapse */ DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(UserConfigService), ɵɵinject(HttpClient)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * Contains base Url for api end points
     * @type {?}
     */
    DataService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-detail/event-detail.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventDetailService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event detail
     * @param {?} identifier
     * @return {?}
     */
    getEvent(identifier) {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().detail + identifier
        };
        return this.dataService.get(req);
    }
    /**
     * For enroll/unenroll user
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    enrollUser(cId, uId) {
        //param : cid and uid
        //let apiUrl = '' + this.eventLibraryService.userID;
        //return this.http.get<any>(apiUrl);
        //param : cid and uid
        //let apiUrl = '' + this.eventLibraryService.userID;
        //return this.http.get<any>(apiUrl);
        /** @type {?} */
        const requestBody = {
            request: {
                "courseId": cId,
                "userId": uId,
                "fixedBatchId": "event_batch_id"
            }
        };
    }
}
EventDetailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventDetailService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventDetailService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventDetailService_Factory() { return new EventDetailService(ɵɵinject(UserConfigService), ɵɵinject(DataService)); }, token: EventDetailService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventDetailService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventDetailService.prototype.dataService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventDetailComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} eventDetailService
     */
    constructor(activatedRoute, eventDetailService) {
        this.activatedRoute = activatedRoute;
        this.eventDetailService = eventDetailService;
        this.labelMessages = labelMessages;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.queryParams = params;
        }));
        if (this.queryParams.identifier) {
            this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.eventDetailItem = data.result.event;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log('err = ', err);
            }));
        }
    }
}
EventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-detail',
                template: "<div class=\"event-wrapper\">\n    <sb-cover-event-detail [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\"></sb-cover-event-detail>\n    <sb-join-event-button [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\" [canUnenroll]=\"canUnenroll\"></sb-join-event-button>\n    <sb-advance-event-detail [eventDetailItem]=\"eventDetailItem\"></sb-advance-event-detail>\n\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
EventDetailComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: EventDetailService }
];
EventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    canUnenroll: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    EventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    EventDetailComponent.prototype.userData;
    /** @type {?} */
    EventDetailComponent.prototype.canUnenroll;
    /** @type {?} */
    EventDetailComponent.prototype.queryParams;
    /** @type {?} */
    EventDetailComponent.prototype.isNew;
    /** @type {?} */
    EventDetailComponent.prototype.eventCreateService;
    /** @type {?} */
    EventDetailComponent.prototype.formFieldProperties;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype.eventDetailService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-list/event-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventListComponent {
    /**
     * @param {?} router
     * @param {?} translate
     */
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.paginateLimit = 5;
        this.eventDetailData = new EventEmitter();
        this.redirectToDetail = new EventEmitter();
        this.redirection = 'event';
        //translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /*onEventWrapper(identifier) {
        alert('hiii2');
        
        this.router.navigate([this.redirection], {
          queryParams: {
            identifier: identifier,
            view: 'detail'
          }
        });
      }*/
    /**
     * @param {?} res
     * @return {?}
     */
    navToEventDetail(res) {
        this.eventDetailData.emit(res);
    }
}
EventListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-list',
                template: "<div class=\" sbt-page-content-area\">\n    <div class=\"card-container\">\n        <div class=\"masonry-grid \" *ngIf=\"list\">\n            <div class=\"masonry-item\"  *ngFor=\"let event of list | paginate: { itemsPerPage: paginateLimit, currentPage: p }\">\n                <!-- <div class=\"sb-card\" (click)=\"onEventWrapper(event?.identifier);navToEventDetail(event)\" tabindex=\"0\"> -->\n\n                <div class=\"sb-card\" (click)=\"navToEventDetail(event)\" tabindex=\"0\">\n                    <div class=\"sb-card-body\">\n                        <div class=\"sb-card-metas\">\n                            <div class=\"sb-card-image mr-16\">\n                                <img src=\"./assets/images/eventcover.jpg\">\n                            </div>\n                            <div class=\"sb-card-meta course\">\n                                <div *ngIf=\"event?.audience\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'audience' | translate}}: {{event?.audience}}\n                                </div>\n                                <div *ngIf=\"event?.onlineProvider\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'eventtype' | translate}}: {{event?.onlineProvider}}\n                                </div>\n                                <div *ngIf=\"event?.status\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'Status' | translate}}: {{event?.status}}\n                                </div>\n                                <div *ngIf=\"event?.startDate\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'startdate' | translate}}: {{event?.startDate}}\n                                </div>\n                            </div>\n                        </div>\n                        <h4 *ngIf=\"event?.name\" class=\"sb-card-title\">\n                            {{event?.name}}\n                        </h4>\n                        <!-- <div *ngIf=\"event?.status\" class=\"sb-card-org ellipsis \">\n                {{event?.status}} \n              </div> -->\n                        <div class=\"sb-label-status sb-label-status-success ml-auto mr-15 p-10 mt-8\">\n                            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span> {{event?.eventType}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n              <pagination-controls (pageChange)=\"p = $event\"  *ngIf=\"list\"></pagination-controls>        \n    </div>\n</div>",
                styles: [".card-container{margin:1.5rem}.filter-container{margin:5rem}.sb-card{margin-left:3.5rem;margin-bottom:2rem}a.disabled{color:gray;pointer-events:none;cursor:default}"]
            }] }
];
/** @nocollapse */
EventListComponent.ctorParameters = () => [
    { type: Router },
    { type: TranslateService }
];
EventListComponent.propDecorators = {
    list: [{ type: Input }],
    paginateLimit: [{ type: Input }],
    eventDetailData: [{ type: Output }],
    redirectToDetail: [{ type: Output }],
    redirection: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EventListComponent.prototype.list;
    /** @type {?} */
    EventListComponent.prototype.paginateLimit;
    /** @type {?} */
    EventListComponent.prototype.eventDetailData;
    /** @type {?} */
    EventListComponent.prototype.redirectToDetail;
    /** @type {?} */
    EventListComponent.prototype.p;
    /** @type {?} */
    EventListComponent.prototype.redirection;
    /**
     * @type {?}
     * @private
     */
    EventListComponent.prototype.router;
    /** @type {?} */
    EventListComponent.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/iziToast/izitoast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SbToastService {
    /**
     * @param {?} iziToast
     */
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    /**
     * For show toast message
     * @param {?} message
     * @param {?} type
     * @return {?}
     */
    showIziToastMsg(message, type) {
        type = (type == 'error') ? "danger" : type;
        this.destroyIzitoast();
        this.iziToast.show({
            title: type,
            message: message,
            class: "sb-toaster sb-toast-" + type,
            position: 'bottomCenter',
            timeout: 3000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    }
    /**
     * Destroys IziToast
     * @return {?}
     */
    destroyIzitoast() {
        this.iziToast.destroy();
    }
}
SbToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SbToastService.ctorParameters = () => [
    { type: NgxIzitoastService }
];
/** @nocollapse */ SbToastService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SbToastService_Factory() { return new SbToastService(ɵɵinject(NgxIzitoastService)); }, token: SbToastService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SbToastService.prototype.iziToast;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-create/event-create.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventCreateService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     * @param {?} sbToastService
     */
    constructor(userConfigService, dataService, sbToastService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.sbToastService = sbToastService;
    }
    /**
     * For get event form config
     * @return {?}
     */
    getEventFormConfig() {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().eventFormConfigApi
        };
        return this.dataService.get(req);
    }
    /**
     * For post event data
     * @param {?} formData
     * @return {?}
     */
    createEvent(formData) {
        /** @type {?} */
        const requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().create,
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
        // .subscribe((data)=>{
        //   console.log({data});
        // });
        this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    updateEvent(formData) {
        /** @type {?} */
        const requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.patch(option);
        // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    }
    /**
     * For publish event
     * @param {?} identifier
     * @return {?}
     */
    publishEvent(identifier) {
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
    }
}
EventCreateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventCreateService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService },
    { type: SbToastService }
];
/** @nocollapse */ EventCreateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventCreateService_Factory() { return new EventCreateService(ɵɵinject(UserConfigService), ɵɵinject(DataService), ɵɵinject(SbToastService)); }, token: EventCreateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.dataService;
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.sbToastService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/timezone/timezone.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimezoneCal {
    constructor() {
        /**
         * For get timezone code
         * @return string (Eg : IST)
         */
        this.timeZoneAbbreviated = (/**
         * @return {?}
         */
        () => {
            const { 1: tz } = new Date().toString().match(/\((.+)\)/);
            if (tz.includes(" ")) {
                return tz
                    .split(" ")
                    .map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([first]) => first))
                    .join("");
            }
            else {
                return tz;
            }
        });
    }
    /**
     * For fing current location time
     *
     * @param {?} date event date
     * @param {?} time event time
     * @return {?} location base date & time
     */
    calcTime(date, time) {
        // create Date object for current location
        /** @type {?} */
        let d = new Date(date + " " + time);
        /** @type {?} */
        let offset = d.getTimezoneOffset() / -60;
        //alert(date + ' - ' + time);
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        /** @type {?} */
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        return new Date(utc + (3600000 * offset));
    }
    /**
     * To get time offset
     * @return {?} offset (eg +5.30 etc)
     */
    getTimeOffset() {
        /** @type {?} */
        let date = new Date();
        /** @type {?} */
        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        /** @type {?} */
        var offset = Math.abs(date.getTimezoneOffset());
        /** @type {?} */
        var hours = this.pad(Math.floor(offset / 60));
        /** @type {?} */
        var minutes = this.pad(offset % 60);
        return sign + hours + ":" + minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pad(value) {
        return value < 10 ? '0' + value : value;
    }
}
TimezoneCal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TimezoneCal.ctorParameters = () => [];
/** @nocollapse */ TimezoneCal.ngInjectableDef = ɵɵdefineInjectable({ factory: function TimezoneCal_Factory() { return new TimezoneCal(); }, token: TimezoneCal, providedIn: "root" });
if (false) {
    /**
     * For get timezone code
     * \@return string (Eg : IST)
     * @type {?}
     */
    TimezoneCal.prototype.timeZoneAbbreviated;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/image-search/image-search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageSearchService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event detail
     * @return {?}
     */
    getEditMode() {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().EditModeApi
        };
        return this.dataService.get(req);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    getMyImages(request) {
        /** @type {?} */
        const reqParam = {
            url: this.userConfigService.getConfigUrl().ImageSearchApi,
            data: {
                request: {
                    filters: {
                        contentType: 'Asset',
                        compatibilityLevel: {
                            min: 1,
                            max: 2
                        },
                        status: ['Live'],
                    },
                    limit: 50,
                }
            }
        };
        reqParam.data.request = request ? merge({}, reqParam.data.request, request) : reqParam;
        console.log(reqParam);
        return this.dataService.get(reqParam);
    }
    /**
     * @param {?=} req
     * @return {?}
     */
    createMediaAsset(req) {
        /** @type {?} */
        const reqParam = {
            url: get(this.userConfigService.getConfigUrl(), 'createImage'),
            // url: _.get(this.configService.urlConFig, 'URLS.CONTENT.CREATE'),
            data: {
                request: {
                    content: {
                        contentType: 'Asset',
                        language: ['English'],
                    }
                }
            }
        };
        reqParam.data.request = req ? merge({}, reqParam.data.request, req) : reqParam;
        return this.dataService.post(reqParam);
    }
    /**
     * @param {?} req
     * @param {?} assetId
     * @return {?}
     */
    uploadMedia(req, assetId) {
        /** @type {?} */
        let reqParam = {
            // url: `${this.configService.urlConFig.URLS.CONTENT.UPLOAD}${assetId}`,
            url: this.userConfigService.getConfigUrl().EditModeApi,
            data: req.data
        };
        reqParam = req ? merge({}, reqParam, req) : reqParam;
        return this.dataService.post(reqParam);
    }
}
ImageSearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ImageSearchService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ ImageSearchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ImageSearchService_Factory() { return new ImageSearchService(ɵɵinject(UserConfigService), ɵɵinject(DataService)); }, token: ImageSearchService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageSearchService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    ImageSearchService.prototype.dataService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventCreateComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} eventCreateService
     * @param {?} eventDetailService
     * @param {?} router
     * @param {?} location
     * @param {?} sbToastService
     * @param {?} formBuilder
     * @param {?} timezoneCal
     * @param {?} translate
     * @param {?} userConfigService
     * @param {?} imageSearchService
     */
    constructor(activatedRoute, eventCreateService, eventDetailService, router, location, sbToastService, formBuilder, timezoneCal, translate, userConfigService, imageSearchService) {
        this.activatedRoute = activatedRoute;
        this.eventCreateService = eventCreateService;
        this.eventDetailService = eventDetailService;
        this.router = router;
        this.location = location;
        this.sbToastService = sbToastService;
        this.formBuilder = formBuilder;
        this.timezoneCal = timezoneCal;
        this.translate = translate;
        this.userConfigService = userConfigService;
        this.imageSearchService = imageSearchService;
        this.closeSaveForm = new EventEmitter();
        this.navAfterSave = new EventEmitter();
        this.today = new Date();
        this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
        this.startDate = this.todayDate;
        this.endDate = this.todayDate;
        this.startTime = (('0' + (this.today.getHours() + 1))).slice(-2) + ":" + ('0' + this.today.getMinutes()).slice(-2) + ":" + ('0' + this.today.getSeconds()).slice(-2);
        this.endTime = (('0' + (this.today.getHours() + 2))).slice(-2) + ":" + ('0' + this.today.getMinutes()).slice(-2) + ":" + ('0' + this.today.getSeconds()).slice(-2);
        this.registrationStartDate = this.todayDate;
        this.registrationEndDate = this.todayDate;
        this.isSubmitted = false;
        this.isNew = true;
        this.canPublish = false;
        this.offset = this.timezoneCal.getTimeOffset();
        this.flag = true;
        // Ankita changes
        this.showAppIcon = true;
        this.appIconConfig = {
            code: "appIcon",
            dataType: "text",
            description: "appIcon of the content",
            editable: true,
            inputType: "appIcon",
            label: "Icon",
            name: "Icon",
            placeholder: "Icon",
            renderingHints: { class: "sb-g-col-lg-1 required" },
            required: true,
            visible: true
        };
        this.appIcon = "";
        this.showImagePicker = true;
        this.customFields = this.formBuilder.group({
            startDate: [] = this.todayDate,
            endDate: [] = this.todayDate,
            startTime: [] = this.startTime,
            endTime: [] = this.endTime,
            registrationStartDate: [] = this.todayDate,
            registrationEndDate: [] = this.todayDate,
        });
    }
    // Ankita changes
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setAppIconData();
    }
    // Ankita changes
    /**
     * @return {?}
     */
    setAppIconData() {
        /** @type {?} */
        const isRootNode = true;
        //this.appIconConfig = _.find(_.flatten(_.map(this.rootFormConfig, 'fields')), {code: 'appIcon'});
        // if (!_.isUndefined(this.appIconConfig) && isRootNode === true) {
        //   this.showAppIcon = true;
        // } else {
        //   this.showAppIcon = false;
        // }
        // this.appIcon = _.get(this.nodeMetadata, 'data.metadata.appIcon');
        this.appIcon = "";
        if (this.isReviewMode()) {
            this.appIconConfig = Object.assign({}, this.appIconConfig, { isAppIconEditable: false });
        }
        else {
            this.appIconConfig = Object.assign({}, this.appIconConfig, { isAppIconEditable: true });
        }
        // const ifEditable = this.ifFieldIsEditable('appIcon');
    }
    /**
     * @return {?}
     */
    isReviewMode() {
        this.imageSearchService.getEditMode().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.editmode = data.d.edit;
        }));
        return includes(['review', 'read', 'sourcingreview'], this.editmode);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
        // setTimeout(() =>{
        // alert(this.userId);
        // });
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.queryParams = params;
            if (this.queryParams.identifier) {
                this.isNew = false;
            }
        }));
        if (this.queryParams.identifier) {
            this.eventCreateService.getEventFormConfig().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.formFieldProperties = data.result['form'].data.fields;
            }));
            this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.queryParams = data.result.event;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log('err = ', err);
            }));
        }
        if (this.queryParams.identifier) {
            setTimeout((/**
             * @return {?}
             */
            () => this.initializeFormFields()), 500);
        }
        /** @type {?} */
        let group = {};
    }
    /**
     * @return {?}
     */
    initializeFormFields() {
        /** @type {?} */
        var editValues = {};
        /** @type {?} */
        var eventStart = (this.timezoneCal.calcTime(this.queryParams['startDate'], this.queryParams['startTime']));
        /** @type {?} */
        var eventEnd = (this.timezoneCal.calcTime(this.queryParams['endDate'], this.queryParams['endTime']));
        this.formFieldProperties.forEach((/**
         * @param {?} formField
         * @return {?}
         */
        formField => {
            if (formField.code in this.queryParams) {
                if (formField.code == 'venue') {
                    formField.default = this.queryParams[formField.code]['name'];
                    editValues[formField.code] = this.queryParams[formField.code]['name'];
                }
                else if (formField.code == 'onlineProviderData') {
                    formField.default = this.queryParams[formField.code]['meetingLink'];
                    editValues[formField.code] = this.queryParams[formField.code]['meetingLink'];
                }
                else {
                    formField.default = this.queryParams[formField.code];
                    editValues[formField.code] = this.queryParams[formField.code];
                }
            }
        }));
        this.formValues = editValues;
        this.formFieldData = this.formFieldProperties;
        console.log(this.formFieldData);
        console.log(this.formValues);
        this.customFields = this.formBuilder.group({
            startDate: [] = eventStart.getFullYear() + '-' + ('0' + (eventStart.getMonth() + 1)).slice(-2) + '-' + ('0' + eventStart.getDate()).slice(-2),
            endDate: [] = eventEnd.getFullYear() + '-' + ('0' + (eventEnd.getMonth() + 1)).slice(-2) + '-' + ('0' + eventEnd.getDate()).slice(-2),
            startTime: [] = (('0' + (eventStart.getHours()))).slice(-2) + ":" + ('0' + eventStart.getMinutes()).slice(-2) + ":" + ('0' + eventStart.getSeconds()).slice(-2),
            endTime: [] = (('0' + (eventEnd.getHours()))).slice(-2) + ":" + ('0' + eventEnd.getMinutes()).slice(-2) + ":" + ('0' + eventEnd.getSeconds()).slice(-2),
            registrationStartDate: [] = this.queryParams['registrationStartDate'],
            registrationEndDate: [] = this.queryParams['registrationEndDate'],
        });
    }
    /**
     * @param {?} eventData
     * @return {?}
     */
    valueChanges(eventData) {
        if (eventData) {
            this.formValues = eventData;
            if (this.flag) {
                this.constFormFieldProperties = this.formFieldProperties;
                this.flag = false;
            }
            else {
                this.formFieldProperties = this.constFormFieldProperties;
                this.formFieldProperties.forEach((/**
                 * @param {?} formField
                 * @return {?}
                 */
                formField => {
                    if (formField.code == 'eventType') {
                        formField.default = eventData.eventType;
                    }
                }));
            }
            if (eventData.eventType == "Offline") {
                console.log(eventData.eventType);
                this.formFieldProperties = this.formFieldProperties.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.code !== 'onlineProvider'));
                this.formFieldProperties = this.formFieldProperties.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.code !== 'onlineProviderData'));
            }
            else if (eventData.eventType == "Online") {
                this.formFieldProperties = this.formFieldProperties.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.code !== 'venue'));
            }
        }
    }
    /**
     * For validate data and call post form service
     * @param {?} canPublish
     * @return {?}
     */
    postData(canPublish) {
        this.isSubmitted = true;
        this.canPublish = canPublish;
        if (this.formValues == undefined) {
            this.sbToastService.showIziToastMsg("Please enter event name", 'warning');
        }
        else if (this.formValues.name == undefined || this.formValues.name.trim() == "") {
            this.sbToastService.showIziToastMsg("Please enter event name", 'warning');
        }
        else if (this.formValues.code == undefined) {
            this.sbToastService.showIziToastMsg("Please enter code", 'warning');
        }
        else if ((this.customFields.value.startDate == undefined || this.customFields.value.startTime == undefined || !this.timeValidation(this.customFields.value.startDate, this.customFields.value.startTime)) && this.isNew) {
            this.sbToastService.showIziToastMsg("Please enter valid event start date and time", 'warning');
        }
        else if ((this.customFields.value.endDate == undefined || this.customFields.value.endTime == undefined || !this.timeValidation(this.customFields.value.endDate, this.customFields.value.endTime)) && this.isNew) {
            this.sbToastService.showIziToastMsg("Please enter valid event end date and time", 'warning');
        }
        else if (this.customFields.value.registrationStartDate == undefined) {
            this.sbToastService.showIziToastMsg("Please enter valid event registration start date", 'warning');
        }
        else if (this.customFields.value.registrationEndDate == undefined) {
            this.sbToastService.showIziToastMsg("Please enter valid registration end date", 'warning');
        }
        else if (!this.dateValidation(this.customFields.value.startDate + " " + this.customFields.value.startTime, this.customFields.value.endDate + " " + this.customFields.value.endTime)) {
            this.sbToastService.showIziToastMsg("Event end date should be greater than start date", 'warning');
        }
        else if (!this.dateValidation(this.customFields.value.registrationStartDate, this.customFields.value.registrationEndDate)) {
            this.sbToastService.showIziToastMsg("Registration end date should be greater than registration start date", 'warning');
        }
        else if (!this.dateValidation(this.customFields.value.registrationStartDate + " 00:00:00", this.customFields.value.endDate)) {
            this.sbToastService.showIziToastMsg("Registration start date should be less than event end date", 'warning');
        }
        else if (!this.dateValidation(this.customFields.value.registrationEndDate + " 00:00:00", this.customFields.value.endDate)) {
            this.sbToastService.showIziToastMsg("Registration end date should be less than event end date", 'warning');
        }
        else {
            this.formValues = Object.assign(this.formValues, this.customFields.value);
            if (this.queryParams.identifier) {
                this.formValues["identifier"] = this.queryParams.identifier;
            }
            this.formValues["startTime"] = this.formValues["startTime"] + this.offset;
            this.formValues["endTime"] = this.formValues["endTime"] + this.offset;
            this.formValues['onlineProviderData'] = (this.formValues['onlineProviderData'] != null) ? ({ "meetingLink": this.formValues['onlineProviderData'] }) : {};
            this.formValues['venue'] = { "name": this.formValues['venue'] };
            this.formValues['owner'] = this.userId;
            if (this.isNew) {
                this.eventCreateService.createEvent(this.formValues).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    if (data.responseCode == "OK") {
                        this.dataSubmitted(data);
                    }
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    console.log({ err });
                    this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
                }));
            }
            else {
                this.formValues['versionKey'] = this.queryParams.versionKey;
                this.eventCreateService.updateEvent(this.formValues).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    if (data.responseCode == "OK") {
                        this.dataSubmitted(data);
                    }
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    console.log({ err });
                    this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
                }));
            }
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    dataSubmitted(data) {
        if (this.canPublish) {
            this.eventCreateService.publishEvent(data.result.identifier).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.navAfterSave.emit(data);
                this.sbToastService.showIziToastMsg("Event Created Successfully", 'success');
            }));
        }
        else {
            this.navAfterSave.emit(data);
            this.sbToastService.showIziToastMsg("Event Created Successfully", 'success');
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.closeSaveForm.emit();
        //this.location.back()
    }
    /**
     * For time validation
     *
     * @param {?} date
     * @param {?} time Contains time
     * @return {?} Return true if event start time is greater current time
     */
    timeValidation(date, time) {
        /** @type {?} */
        var startEventTime = new Date(date + " " + time);
        /** @type {?} */
        var startDifference = startEventTime.getTime() - this.today.getTime();
        /** @type {?} */
        var timeDiff = Math.round(startDifference / 60000);
        return (timeDiff > 0) ? true : false;
    }
    /**
     * For date validation
     *
     * @param {?} sdate Contains start data
     * @param {?} edate Contains end data
     * @return {?}
     */
    dateValidation(sdate, edate) {
        /** @type {?} */
        var startEventDate = new Date(sdate);
        /** @type {?} */
        var endEventDate = new Date(edate);
        /** @type {?} */
        var startDifference = endEventDate.getTime() - startEventDate.getTime();
        /** @type {?} */
        var timeDiff = Math.round(startDifference / 60000);
        return (timeDiff >= 0) ? true : false;
    }
    // Ankita
    /**
     * @param {?} event
     * @return {?}
     */
    appIconDataHandler(event) {
        console.log(event, "= onclickmethd");
        // this.appIcon = event.url;
        // this.treeService.updateAppIcon(event.url);
    }
}
EventCreateComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-create',
                template: "<div class=\"p-40\">\n\n    <h1 class=\"mt-20 mb-20\">{{'createnewevent' | translate}}</h1>\n    <ng-container *ngIf=\"isNew;then New; else Edit\">\n    </ng-container>\n    <ng-template #New>\n        <sb-dynamic-form *ngIf=\"formFieldProperties\" class=\"label-1\" [config]=\"formFieldProperties\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n    <ng-template #Edit>\n        <sb-dynamic-form *ngIf=\"formFieldData\" class=\"label-1\" [config]=\"formFieldData\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n\n    <!-- <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let field of customFieldsForm\" class=\"d-flex flex-jc-space-between\">\n            <div class=\"mb-12 w-100\">\n                <div class=\"mb-5 fs-0-785\">{{field.code}}</div>\n                \n                <input *ngIf=\"field.dataType == 'text'\" class=\"fsmall sb-textbox text-uppercase py-8 w-85 px-16\" formControlName=\"field.code\" type=\"text\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                <input *ngIf=\"field.dataType =='time'\" class=\"fsmall sb-textbox text-uppercase py-8 px-16\" formControlName=\"field.code\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n            </div>\n        </div>\n        <input type=\"submit\" value=\"save\"/>\n    </form> -->\n    <form class=\"ui form\" [formGroup]=\"customFields\">\n        <div class=\"form-group\">\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'startdatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"startDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"startTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'enddatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"endDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"endTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\" min={{startTime}}>\n                    </div>\n                </div>\n            </div>\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationStartDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationStartDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationEndDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationEndDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n\n                     \n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <lib-collection-icon *ngIf=\"showAppIcon\" [appIcon]=\"appIcon\" [appIconConfig]=\"appIconConfig\" (iconEmitter)=\"appIconDataHandler($event)\"></lib-collection-icon>\n\n    <div class=\"d-flex my-24 flex-jc-flex-end\">\n        <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-md ripple\" (click)=\"cancel();\">{{'cancel' | translate}}</button>\n\n        <button type=\"button\" class=\"sb-btn sb-btn-success sb-btn-md ripple ml-12\" (click)=\"postData(true);\">{{'saveToPublish' | translate}}</button>\n        <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-md ripple ml-12\" (click)=\"postData(false);\">{{'saveAsDraft' | translate}}</button>\n\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:1.5rem;column-gap:1.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.two-column-grid.formSection:first-child .sb-g-col-lg-1:first-child .sb-input{margin:0}.two-column-grid.formSection:first-child .sb-g-col-lg-1:nth-child(2n) .sb-textarea-container{margin:0!important}.formSection{padding:1.5rem 0}.formSection:first-child{padding:0 0 1.5rem}.multi-select-section-app label{margin-bottom:.3rem!important}.list-border{height:2.8rem!important}.list-border ul{padding:0!important}.list-border ul span{font-weight:500!important;font-size:.785rem}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important}.sb-modal-dropdown-web ul{color:#333;border-bottom:solid 1px var(--gray-100);padding:0;margin:0!important;opacity:1!important;font-size:12px!important;font-weight:500;border:2px solid #eeeeef}.sb-keywordbox{border:1px solid rgba(34,36,38,.15)!important;padding:0!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500}.sb-keywordbox .ng2-tag-input{padding:0}.sb-keywordbox .ng2-tag-input tag{margin-left:.5rem}.sb-keywordbox .ng2-tags-container{margin-top:.2rem}.sb-keywordbox .tag-wrapper,.sb-keywordbox delete-icon svg{height:24px!important;line-height:24px}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.multi-select-container .list-border ul{font-size:12px!important;color:#333;padding:0;margin:0!important;opacity:1!important;font-weight:500!important}.sb-dropdown label{padding:0!important}.sb-textarea-container .sb-textarea{padding-top:.5rem!important}.sb-textarea-container label{padding:0!important}.sb-checkbox{padding:1.5rem 0;margin-top:3.2rem}textarea-container .sb-textarea{height:2.9rem;padding-top:.5rem!important}textarea-container label{padding:0!important}sb-icon-dropdown{top:10px!important;right:6px!important}.sb-dropdown,.sb-textarea-container{margin:1rem 0!important}.dynamic-form .sb-search-input::-webkit-input-placeholder{padding-left:1.4rem!important}.dynamic-form .required label:after{content:\"*\";margin:-.2em 0 0 .2em;color:#db2828}.search-container{margin-left:1rem}.w-85{width:85%;max-width:85%}.w-96{width:96%;max-width:96%}.required{color:red}.ui.modal{display:block!important;max-width:45rem}"]
            }] }
];
/** @nocollapse */
EventCreateComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: EventCreateService },
    { type: EventDetailService },
    { type: Router },
    { type: Location },
    { type: SbToastService },
    { type: FormBuilder },
    { type: TimezoneCal },
    { type: TranslateService },
    { type: UserConfigService },
    { type: ImageSearchService }
];
EventCreateComponent.propDecorators = {
    formFieldProperties: [{ type: Input }],
    userId: [{ type: Input }],
    closeSaveForm: [{ type: Output }],
    navAfterSave: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    EventCreateComponent.prototype.formFieldProperties;
    /** @type {?} */
    EventCreateComponent.prototype.userId;
    /** @type {?} */
    EventCreateComponent.prototype.closeSaveForm;
    /** @type {?} */
    EventCreateComponent.prototype.navAfterSave;
    /** @type {?} */
    EventCreateComponent.prototype.today;
    /** @type {?} */
    EventCreateComponent.prototype.todayDate;
    /** @type {?} */
    EventCreateComponent.prototype.formValues;
    /** @type {?} */
    EventCreateComponent.prototype.startDate;
    /** @type {?} */
    EventCreateComponent.prototype.endDate;
    /** @type {?} */
    EventCreateComponent.prototype.startTime;
    /** @type {?} */
    EventCreateComponent.prototype.endTime;
    /** @type {?} */
    EventCreateComponent.prototype.registrationStartDate;
    /** @type {?} */
    EventCreateComponent.prototype.registrationEndDate;
    /** @type {?} */
    EventCreateComponent.prototype.timeDiff;
    /** @type {?} */
    EventCreateComponent.prototype.queryParams;
    /** @type {?} */
    EventCreateComponent.prototype.eventDetailsForm;
    /** @type {?} */
    EventCreateComponent.prototype.isSubmitted;
    /** @type {?} */
    EventCreateComponent.prototype.formFieldData;
    /** @type {?} */
    EventCreateComponent.prototype.FormData;
    /** @type {?} */
    EventCreateComponent.prototype.isNew;
    /** @type {?} */
    EventCreateComponent.prototype.timezoneshort;
    /** @type {?} */
    EventCreateComponent.prototype.canPublish;
    /** @type {?} */
    EventCreateComponent.prototype.offset;
    /** @type {?} */
    EventCreateComponent.prototype.constFormFieldProperties;
    /** @type {?} */
    EventCreateComponent.prototype.flag;
    /** @type {?} */
    EventCreateComponent.prototype.showAppIcon;
    /** @type {?} */
    EventCreateComponent.prototype.appIconConfig;
    /** @type {?} */
    EventCreateComponent.prototype.appIcon;
    /** @type {?} */
    EventCreateComponent.prototype.editmode;
    /** @type {?} */
    EventCreateComponent.prototype.showImagePicker;
    /** @type {?} */
    EventCreateComponent.prototype.customFields;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.eventCreateService;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.eventDetailService;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.sbToastService;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.timezoneCal;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventCreateComponent.prototype.imageSearchService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event/event.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.isEnroll = false;
    }
    /**
     * To user enrolled event list
     * @param {?} courseId
     * @param {?} userId
     * @return {?}
     */
    getEnrollEvents(courseId, userId) {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().enrollListApi
        };
        return this.dataService.get(req);
    }
    /**
     * For Enroll/Unenroll to the event
     * @param {?} action
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    enrollToEventPost(action, cId, uId) {
        /** @type {?} */
        const requestBody = {
            request: {
                "courseId": cId,
                "userId": uId,
                "fixedBatchId": "event_batch_id"
            }
        };
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().enrollApi,
            data: requestBody
        };
        return this.dataService.post(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log("Result = ", data);
        }));
    }
}
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(ɵɵinject(UserConfigService), ɵɵinject(DataService)); }, token: EventService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EventService.prototype.isEnroll;
    /** @type {?} */
    EventService.prototype.items;
    /**
     * @type {?}
     * @private
     */
    EventService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventService.prototype.dataService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/join-event-button/join-event-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JoinEventComponent {
    /**
     * @param {?} eventService
     * @param {?} timezoneCal
     */
    constructor(eventService, timezoneCal) {
        this.eventService = eventService;
        this.timezoneCal = timezoneCal;
        this.canUnenroll = true;
        this.isUserAbleToJoin = false;
        this.isEnrolled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isEnrollEvent();
        }), 1000);
        setInterval((/**
         * @return {?}
         */
        () => {
            this.joinEvent();
        }), 1000);
    }
    /**
     * For validate and show/hide join button
     * @return {?}
     */
    joinEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.today = new Date();
            this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
            this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();
            /** @type {?} */
            var todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
            /** @type {?} */
            var startEventTime = yield this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime);
            /** @type {?} */
            var startDifference = startEventTime.getTime() - todayDateTime.getTime();
            /** @type {?} */
            var startInMinutes = Math.round(startDifference / 60000);
            /** @type {?} */
            var endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);
            /** @type {?} */
            var endDifference = todayDateTime.getTime() - endEventTime.getTime();
            /** @type {?} */
            var endInMinutes = Math.round(endDifference / 60000);
            this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;
        });
    }
    /**
     * For check user is enrolled or not
     * @return {?}
     */
    isEnrollEvent() {
        this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.items = data.result.courses;
            this.items.find((/**
             * @param {?} o
             * @param {?} i
             * @return {?}
             */
            (o, i) => {
                if (o.courseId === this.eventDetailItem.identifier) {
                    this.isEnrolled = true;
                }
            }));
        }));
    }
    /**
     * Enroll/Unenroll event
     *
     * @param {?} action enroll/unenroll
     * @return {?}
     */
    enrollToEvent(action) {
        this.eventService.enrollToEventPost(action, this.eventDetailItem.code, this.userData);
    }
    /**
     * For join attain event
     *
     * @param {?} joinLink event join url
     * @return {?}
     */
    openProviderLink(joinLink) {
        window.open(joinLink, "_blank");
    }
}
JoinEventComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-join-event-button',
                template: "<div class=\"d-flex mt-20\">\n    <div class=\"wl-30\"></div>\n    \n    <div  class=\"w-50 d-flex  join-btn my-12\">\n        <button *ngIf=\"isUserAbleToJoin && isEnrolled\" type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary w-50 sb-btn-normal mr-12 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n        <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn w-50 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n        <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"w-50 sb-btn sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n    </div>\n\n\n    <!-- <table>\n        <tr>\n            <td>\n                <button type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary  sb-btn-normal w-100  mt-20 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n\n            </td>\n            <td *ngIf=\"canUnenroll\">\n                <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary  w-100 sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n                <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"sb-btn w-100 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n            </td>\n        </tr>\n    </table> -->\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
JoinEventComponent.ctorParameters = () => [
    { type: EventService },
    { type: TimezoneCal }
];
JoinEventComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    canUnenroll: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    JoinEventComponent.prototype.eventDetailItem;
    /** @type {?} */
    JoinEventComponent.prototype.userData;
    /** @type {?} */
    JoinEventComponent.prototype.canUnenroll;
    /** @type {?} */
    JoinEventComponent.prototype.todayDateTime;
    /** @type {?} */
    JoinEventComponent.prototype.isUserAbleToJoin;
    /** @type {?} */
    JoinEventComponent.prototype.isEnrolled;
    /** @type {?} */
    JoinEventComponent.prototype.today;
    /** @type {?} */
    JoinEventComponent.prototype.todayDate;
    /** @type {?} */
    JoinEventComponent.prototype.todayTime;
    /** @type {?} */
    JoinEventComponent.prototype.startInMinutes;
    /** @type {?} */
    JoinEventComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    JoinEventComponent.prototype.eventService;
    /**
     * @type {?}
     * @private
     */
    JoinEventComponent.prototype.timezoneCal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/advance-event-detail/advance-event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdvanceEventDetailComponent {
    /**
     * @param {?} translate
     * @param {?} timezoneCal
     */
    constructor(translate, timezoneCal) {
        this.translate = translate;
        this.timezoneCal = timezoneCal;
        this.labelMessages = labelMessages;
        this.isTruncate = false;
        this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} truncate
     * @return {?}
     */
    truncateData(truncate) {
        this.isTruncate = truncate;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    switchLang(lang) {
        this.translate.use(lang);
    }
}
AdvanceEventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-advance-event-detail',
                template: "<div class=\"\">\n    <div>\n        <p *ngIf=\"!isTruncate\"> {{eventDetailItem?.description | slice:0:300}} <a\n                *ngIf=\"eventDetailItem?.description.length > 300\" (click)=\"truncateData(true)\">{{'SeeMore' | translate}}\n\n            </a> </p>\n        <p *ngIf=\"isTruncate\">{{eventDetailItem?.description}} <a (click)=\"truncateData(false)\">{{'LessMore' |\n                translate}}</a> </p>\n        \n\n        <div>\n            <table class=\"w-100 fs-0-92\" *ngIf=\"eventDetailItem?.eventType != 'Online'\">\n                <tr *ngIf=\"eventDetailItem?.venue\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'venue' | translate}} </span>\n                    </td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.venue.name}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationStartDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationStartDate' | translate}} </span></td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.registrationStartDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationEndDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationEndDate' | translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"mr-12\">{{eventDetailItem?.registrationEndDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n            </table>\n\n            <table class=\"w-100\" *ngIf=\"eventDetailItem?.eventType != 'Offline'\">\n                <tr *ngIf=\"eventDetailItem?.onlineProvider\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'onlineproviderdata' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"> {{\n                            eventDetailItem?.onlineProvider}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.code\">\n                    <td class=\"w-17-5\"> <span *ngIf=\"eventDetailItem?.code\" class=\"fs-0-92 font-weight-bold\"> {{'code' |\n                            translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.code}}</span></td>\n                </tr>\n\n\n            </table>\n\n            <table class=\"w-100\">\n                <tr *ngIf=\"eventDetailItem?.language\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'language' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.language}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.keyword\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'keyword' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.keyword}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.createdFor\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'createdFor' | translate}}\n                        </span> </td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.createdFor}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.source\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'source' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.source}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.audience\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold w-90\"> {{'audience' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.audience[0]}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.collaborators\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'collaborators' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"\n                            *ngFor=\"let collaborator of eventDetailItem?.collaborators;let i = index\"> {{i + 1}}.\n                            {{collaborator.name}}</span></td>\n                </tr>\n\n\n            </table>\n\n\n        </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AdvanceEventDetailComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: TimezoneCal }
];
AdvanceEventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.isTruncate;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.timezoneshort;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    AdvanceEventDetailComponent.prototype.timezoneCal;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/cover-event-detail/cover-event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoverEventDetailComponent {
    /**
     * @param {?} router
     * @param {?} eventService
     * @param {?} timezoneCal
     * @param {?} dataService
     * @param {?} translate
     */
    constructor(router, eventService, timezoneCal, dataService, translate) {
        this.router = router;
        this.eventService = eventService;
        this.timezoneCal = timezoneCal;
        this.dataService = dataService;
        this.translate = translate;
        this.isOwner = true;
        this.labelMessages = labelMessages;
        this.isEnrolled = false;
        this.retireEventId = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataService.get({url : 'https://jsonplaceholder.typicode.com/todos/1'}).subscribe(response => 
        //   {
        //     console.log({response});
        //   });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isOwner = (this.eventDetailItem.owner == this.userData) ? true : false;
            this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
            this.setDateTimeOnCover();
        }), 1000);
    }
    /**
     * for show Date Time as per timezone
     * @return {?}
     */
    setDateTimeOnCover() {
        this.eStart = (this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)).toLocaleString();
        this.eEnd = (this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime)).toLocaleString();
    }
    /**
     * @param {?} identifier
     * @param {?} versionKey
     * @return {?}
     */
    upate(identifier, versionKey) {
        this.router.navigate(['/event-post'], {
            queryParams: {
                identifier: identifier,
                versionKey: versionKey
            }
        });
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    retireEvent(identifier) {
        this.retireEventId.emit(identifier);
    }
}
CoverEventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-cover-event-detail',
                template: "<div>\n    <div class=\"d-flex sb-bg-color-gray-0 w-100\">\n        <img class=\"w-30 coverImg\" *ngIf=\"eventDetailItem?.posterImage\" src=\"{{eventDetailItem?.posterImage}}\" />\n        <img class=\"w-30 coverImg\" *ngIf=\"!eventDetailItem?.posterImage\" src=\"./assets/images/eventcover.jpg\" />\n\n\n        <div class=\"ml-20\">\n            <h2 class=\"fs-1.3\">{{eventDetailItem?.name}}</h2>\n            <!-- <span>{{'by' | translate}} {{eventDetailItem?.owner}}</span> -->\n\n            <div class=\"mt-12\" *ngIf=\"eStart\">\n                <div>\n                    <i class=\"fa fa-calendar fs-1\"></i> <span class=\"fs-0-92\"> &nbsp; {{eStart}} - {{eEnd}} ({{timezoneshort}})</span>\n                </div>\n\n                <div *ngIf=\"isOwner\">\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-normal ripple mt-20 mr-12 w-30\" (click)=\"upate(eventDetailItem?.identifier, eventDetailItem?.versionKey);\">{{'edit' | translate}}</button>\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-error sb-btn-normal ripple mt-10 mr-12 w-30\" (click)=\"retireEvent(eventDetailItem?.identifier);\">{{'retire' | translate}}</button>\n\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 mr-12\" (click)=\"upate(eventDetailItem.identifier);\">{{'edit' | translate}}</button> -->\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal  mt-10 mr-12\" (click)=\"retireEvent(eventDetailItem.identifier);\">{{'retire' | translate}}</button> -->\n                    <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n                    <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n\n                </div>\n            </div>\n            <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n            <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Online'\" class=\"sb-label-status sb-label-status-success ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Offline'\" class=\"sb-label-status sb-label-status-error ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-error\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'OnlineAndOffline'\" class=\"sb-label-status sb-label-primary-100 ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-primary\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n\n    </div>\n</div>",
                styles: [".coverImg{-o-object-fit:cover;object-fit:cover}"]
            }] }
];
/** @nocollapse */
CoverEventDetailComponent.ctorParameters = () => [
    { type: Router },
    { type: EventService },
    { type: TimezoneCal },
    { type: DataService },
    { type: TranslateService }
];
CoverEventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    retireEventId: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CoverEventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    CoverEventDetailComponent.prototype.userData;
    /** @type {?} */
    CoverEventDetailComponent.prototype.isOwner;
    /** @type {?} */
    CoverEventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    CoverEventDetailComponent.prototype.eStart;
    /** @type {?} */
    CoverEventDetailComponent.prototype.eEnd;
    /** @type {?} */
    CoverEventDetailComponent.prototype.isEnrolled;
    /** @type {?} */
    CoverEventDetailComponent.prototype.items;
    /** @type {?} */
    CoverEventDetailComponent.prototype.timezoneshort;
    /** @type {?} */
    CoverEventDetailComponent.prototype.retireEventId;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.eventService;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.timezoneCal;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.dataService;
    /** @type {?} */
    CoverEventDetailComponent.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-filter/event-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventFilterComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.filterChangeEvent = new EventEmitter();
        this.isFilterShow = false;
        this.filterSelectedValues = [];
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isFilterShow = this.filterOpenStatus;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    initializeForm() { }
    /**
     * @return {?}
     */
    showfilter() {
        this.isFilterShow = !this.isFilterShow;
        this.filterChangeEvent.emit({
            action: 'filterStatusChange',
            filterStatus: this.isFilterShow
        });
    }
    /**
     * @return {?}
     */
    resetFilter() {
        this.filterSelectedValues = [];
    }
    /**
     * @return {?}
     */
    applyFilter() {
        this.emitApplyFilter();
    }
    /**
     * @return {?}
     */
    emitApplyFilter() {
        this.filterChangeEvent.emit({
            action: 'filterDataChange',
            filter: this.filterValues,
            filtersSelected: this.filterSelectedValues,
            query: this.searchQuery
        });
        console.log('event', this.filterSelectedValues);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    outputData($event) { }
    /**
     * @param {?} $event
     * @return {?}
     */
    onStatusChanges($event) { }
    /**
     * @param {?} $event
     * @return {?}
     */
    valueChanges($event) {
        this.filterSelectedValues = $event;
    }
    /**
     * @return {?}
     */
    onQueryEnter() { }
}
EventFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-filter',
                template: "<div class=\"sb-prominent-filter sb-bg-header-blue\">\n    <div class=\"ui container pt-10 pb-20\">\n        <div class=\"d-flex flex-w-wrap flex-jc-space-between flex-ai-center\">\n            <div class=\"sb-search-box  search-container small no-btn\">\n                <div class=\"input-div relative\">\n                    <i class=\"search icon\"></i>\n                    <input class=\"sb-search-input \" [(ngModel)]=\"searchQuery\" type=\"text\" (keyup.enter)=\"onQueryEnter();\" placeholder=\"Search Event\" />\n                </div>\n                <button class=\"sb-btn sb-btn-normal\">\n            {{'search' | translate}}\n          </button>\n            </div>\n\n            <div class=\"fs-0-785 cursor-pointer\" (click)=\"showfilter()\">\n                {{'changefilters' | translate}}\n                <i *ngIf=\"isFilterShow\" class=\"caret up icon\"></i>\n                <i *ngIf=\"!isFilterShow\" class=\"caret down icon\"></i>\n            </div>\n        </div>\n        <div class=\"library-filter search-container pt-16\" *ngIf=\"isFilterShow\">\n            <hr class=\"mb-20\">\n            <ng-container *ngIf=\"filterConfig\">\n                <sb-dynamic-form [config]=\"filterConfig\" (initialize)=\"outputData($event)\" (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n            </ng-container>\n            <div class=\"d-flex flex-as-center pt-10 sb-btn-cover flex-jc-space-end\">\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-outline-primary ml-5\" (click)=\"resetFilter();\">{{'reset' | translate}}</button>\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-primary ml-15\" (click)=\"applyFilter();\">{{'apply' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:.5rem;column-gap:.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important;height:1rem!important}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.search-container{margin-left:1rem}.sb-search-box .sb-search-input{width:auto!important}"]
            }] }
];
/** @nocollapse */
EventFilterComponent.ctorParameters = () => [
    { type: TranslateService }
];
EventFilterComponent.propDecorators = {
    filterValues: [{ type: Input }],
    filterOpenStatus: [{ type: Input }],
    filterChangeEvent: [{ type: Output }],
    filterConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EventFilterComponent.prototype.filterValues;
    /** @type {?} */
    EventFilterComponent.prototype.filterOpenStatus;
    /** @type {?} */
    EventFilterComponent.prototype.filterChangeEvent;
    /** @type {?} */
    EventFilterComponent.prototype.searchFilterFormConfig;
    /** @type {?} */
    EventFilterComponent.prototype.filterConfig;
    /** @type {?} */
    EventFilterComponent.prototype.isFilterShow;
    /** @type {?} */
    EventFilterComponent.prototype.filterFields;
    /** @type {?} */
    EventFilterComponent.prototype.currentFilters;
    /** @type {?} */
    EventFilterComponent.prototype.searchQuery;
    /** @type {?} */
    EventFilterComponent.prototype.filterSelectedValues;
    /** @type {?} */
    EventFilterComponent.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/event-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    //{ path: '', redirectTo: '/event', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'event', component: EventDetailComponent },
    { path: 'event-post', component: EventCreateComponent },
    { path: 'event-filter', component: EventFilterComponent }
];
class EventRoutingModule {
}
EventRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/collection-icon/collection-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollectionIconComponent {
    constructor() {
        //public showImagePicker : boolean;
        this.showImagePicker = false;
        this.iconEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    initializeImagePicker() {
        if (this.appIconConfig.isAppIconEditable) {
            this.showImagePicker = true;
        }
        else {
            this.showImagePicker = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    collectionIconHandler(event) {
        this.iconEmitter.emit(event);
        this.appIcon = event.url;
        this.showImagePicker = false;
    }
    // dismissImageUploadModal() {
    //   this.showImagePicker = true;
    //   this.showImageUploadModal = false;
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    handleModalDismiss(event) {
        this.showImagePicker = false;
    }
}
CollectionIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-collection-icon',
                template: "<ng-container>\n    <div (click)=\"showImagePicker = true\"\n     class=\"mb-20 w-15\">\n        <div class=\"app-icon-label\" >Icon label</div>\n        <div *ngIf='!appIcon' class=\"sb-centericon\">\n            <div>\n                <i id=\"icon_appIcon\" name=\"icon_appIcon\" class=\"icon image outline\" ></i>\n            </div>\n            <div class=\"addImageText\">Add Image</div>\n        </div>\n        <img *ngIf=\"appIcon\" \n        class=\"ui image sb-appicon\" \n        src=\"{{appIcon}}\"/>\n    </div>\n    <lib-asset-browser *ngIf=\"showImagePicker\" [showImagePicker]=\"showImagePicker\" (assetBrowserEmitter)=\"collectionIconHandler($event)\" (modalDismissEmitter)=\"handleModalDismiss($event)\"></lib-asset-browser>\n</ng-container>\n",
                styles: [".sb-appicon{height:110px;width:120px;border:1px solid #ccc;padding:5px}.sb-centericon{height:110px;width:120px;border:1px solid #ccc;padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column}.addImageText{font-size:.8rem!important}.w-15{width:15%;max-width:15%}.app-icon-label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:600}.ui.modal{display:block!important}"]
            }] }
];
/** @nocollapse */
CollectionIconComponent.ctorParameters = () => [];
CollectionIconComponent.propDecorators = {
    iconEmitter: [{ type: Output }],
    appIcon: [{ type: Input }],
    appIconConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CollectionIconComponent.prototype.showImagePicker;
    /** @type {?} */
    CollectionIconComponent.prototype.iconEmitter;
    /** @type {?} */
    CollectionIconComponent.prototype.showImageUploadModal;
    /** @type {?} */
    CollectionIconComponent.prototype.appIcon;
    /** @type {?} */
    CollectionIconComponent.prototype.appIconConfig;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/asset-browser/asset-browser.data.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const config = {
    uploadIconFormConfig: [{
            'code': 'name',
            'dataType': 'text',
            'editable': false,
            'inputType': 'text',
            'label': 'Asset Caption',
            'name': 'Asset Caption',
            'placeholder': 'Enter asset caption',
            'renderingHints': {
                'class': 'sb-g-col-lg-2 required'
            },
            'required': true,
            'visible': true,
            'validations': [
                {
                    'type': 'required',
                    'message': 'Please enter asset caption'
                }
            ]
        },
        {
            'code': 'keywords',
            'visible': true,
            'editable': false,
            'dataType': 'list',
            'name': 'Tags',
            'placeholder': 'Add tag',
            'renderingHints': {
                'class': 'sb-g-col-lg-2'
            },
            'description': '',
            'inputType': 'keywords',
            'label': 'Tags',
            'required': true,
            'validations': []
        },
        {
            'code': 'creator',
            'dataType': 'text',
            'editable': false,
            'inputType': 'text',
            'label': 'Creator',
            'name': 'Creator',
            'placeholder': 'Enter name',
            'renderingHints': {
                'class': 'sb-g-col-lg-2'
            },
            'required': true,
            'visible': true
        }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/asset-browser/asset-browser.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AssetBrowserComponent {
    /**
     * @param {?} imageSearchService
     * @param {?} sbToastService
     */
    constructor(imageSearchService, sbToastService) {
        this.imageSearchService = imageSearchService;
        this.sbToastService = sbToastService;
        this.assetBrowserEmitter = new EventEmitter();
        this.modalDismissEmitter = new EventEmitter();
        this.isClosable = true;
        this.searchMyInput = '';
        this.myAssets = [];
        this.allImages = [];
        this.assestData = {};
        this.assetConfig = {};
        this.imageUploadLoader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialFormConfig = get(config, 'uploadIconFormConfig');
        this.formConfig = get(config, 'uploadIconFormConfig');
        //this.getMyImages();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // if (this.modal && this.modal.deny) {
        //   this.modal.deny();
        // }
    }
    // Function to get new images
    // getmyImages()
    // {
    //  this.imageSearchService.getMyImages().subscribe(data => {
    //   this.myImages = data.result.content;
    //   });
    // }
    /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    getMyImages(offset, query, search) {
        this.assetsCount = 0;
        if (!search) {
            this.searchMyInput = '';
        }
        if (offset === 0) {
            this.myAssets.length = 0;
        }
        /** @type {?} */
        const req = {
            filters: {
                mediaType: ['image'],
                createdBy: 1001
            },
            offset
        };
        if (query) {
            req['query'] = query;
        }
        // this.questionService.getAssetMedia(req).pipe(catchError(err => {
        //   const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.022') };
        //   return throwError(this.editorService.apiErrorHandling(err, errInfo));
        // })).subscribe((res) => {
        //     this.assetsCount = res.result.count;
        //     _.map(res.result.content, (item) => {
        //       if (item.downloadUrl) {
        //         this.myAssets.push(item);
        //       }
        //     });
        //   });
        //console.log("Request=",req)
        this.imageSearchService.getMyImages(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode == "OK") {
                this.myImages = data.result.content;
                this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log({ err });
            this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    }
    /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    getAllImages(offset, query, search) {
        this.assetsCount = 0;
        if (!search) {
            this.searchAllInput = '';
        }
        if (offset === 0) {
            this.allImages.length = 0;
        }
        /** @type {?} */
        const req = {
            filters: {
                mediaType: ['image']
            },
            offset
        };
        if (query) {
            req['query'] = query;
        }
        this.imageSearchService.getMyImages(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode == "OK") {
                this.allImages = data.result.content;
                this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log({ err });
            this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    }
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    searchImages(event, type) {
        if (event === 'clearInput' && type === 'myImages') {
            this.query = '';
            this.searchMyInput = '';
        }
        else if (event === 'clearInput' && type === 'allImages') {
            this.query = '';
            this.searchAllInput = '';
        }
        else {
            this.query = event.target.value;
        }
        if (type === 'myImages') {
            this.getMyImages(0, this.query, true);
        }
        else {
            //this.getAllImages(0, this.query, true);
        }
    }
    /**
     * @param {?} imageUrl
     * @param {?} imageId
     * @return {?}
     */
    addImageInEditor(imageUrl, imageId) {
        //console.log("img=",imageUrl);console.log("id=",imageId)
        this.appIcon = imageUrl;
        this.showImagePicker = false;
        this.assetBrowserEmitter.emit({ type: 'image', url: this.appIcon });
    }
    /**
     * @return {?}
     */
    dismissImagePicker() {
        this.showImagePicker = false;
        this.modalDismissEmitter.emit({});
    }
    /**
     * @return {?}
     */
    lazyloadMyImages() {
        /** @type {?} */
        const offset = this.myImages.length;
        //this.getmyImages();
    }
    /**
     * @return {?}
     */
    dismissImageUploadModal() {
        this.showImagePicker = true;
        this.showImageUploadModal = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    uploadImage(event) {
        // console.log("EEEEE=",event);
        /** @type {?} */
        const file = event.target.files[0];
        /** @type {?} */
        const reader = new FileReader();
        this.formData = new FormData();
        this.formData.append('file', file);
        this.assetName = file.name;
        /** @type {?} */
        const fileType = file.type;
        /** @type {?} */
        const fileName = file.name.split('.').slice(0, -1).join('.');
        /** @type {?} */
        const fileSize = file.size / 1024 / 1024;
        if (fileType.split('/')[0] === 'image') {
            this.showErrorMsg = false;
            if (fileSize > 1) {
                this.showErrorMsg = true;
                this.errorMsg = 'upload image of minimun size 1MB';
                this.errorMsg = "Error";
                //this.assetConfig.image.size + this.assetConfig.image.sizeType;
                this.resetFormData();
            }
            else {
                this.errorMsg = '';
                this.showErrorMsg = false;
                reader.readAsDataURL(file);
            }
        }
        else {
            this.showErrorMsg = true;
            this.errorMsg = '';
            //  this.errorMsg = _.get(this.configService.labelConfig, 'messages.error.020');
        }
        if (!this.showErrorMsg) {
            this.imageUploadLoader = true;
            this.imageFormValid = true;
            this.assestData = this.generateAssetCreateRequest(fileName, fileType, 'image');
            this.populateFormData(this.assestData);
        }
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    populateFormData(formData) {
        /** @type {?} */
        const formvalue = cloneDeep(this.formConfig);
        this.formConfig = null;
        forEach(formvalue, (/**
         * @param {?} formFieldCategory
         * @return {?}
         */
        (formFieldCategory) => {
            formFieldCategory.default = formData[formFieldCategory.code];
            formFieldCategory.editable = true;
        }));
        this.formConfig = formvalue;
    }
    /**
     * @param {?} fileName
     * @param {?} fileType
     * @param {?} mediaType
     * @return {?}
     */
    generateAssetCreateRequest(fileName, fileType, mediaType) {
        return {
            name: fileName,
            mediaType,
            mimeType: fileType,
            createdBy: 1001,
            creator: "Ankita Chavan",
            // Mock Info
            channel: "01309282781705830427" //this is node ID
        };
    }
    /**
     * @return {?}
     */
    resetFormData() {
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.formConfig = this.initialFormConfig;
    }
    /**
     * @return {?}
     */
    openImageUploadModal() {
        this.showImageUploadModal = true;
        this.formData = null;
        this.formConfig = this.initialFormConfig;
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.showErrorMsg = false;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    uploadAndUseImage(modal) {
        console.log("here", modal);
        //   this.imageSearchService.createMediaAsset({ content: this.assestData }).pipe(catchError(err => {
        //     const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.019') };
        //     return throwError(this.editorService.apiErrorHandling(err, errInfo));
        //   })).subscribe((res) => {
        // //    const imgId = res.result.node_id;
        //     const imgId = '01309282781705830427';
        //     const request = {
        //       data: this.formData
        //     };
        //     this.imageSearchService.uploadMedia(request, imgId).pipe(catchError(err => {
        //       const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.019') };
        //       return throwError(this.editorService.apiErrorHandling(err, errInfo));
        //     })).subscribe((response) => {
        //       this.addImageInEditor(response.result.content_url, response.result.node_id);
        //       this.showImageUploadModal = false;
        //       this.dismissPops(modal);
        //     });
        //  });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onStatusChanges(event) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    valueChanges(event) {
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    dismissPops(modal) {
        console.log("Hi close");
        this.dismissImagePicker();
        modal.deny();
    }
}
AssetBrowserComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-asset-browser',
                template: "<!-- <sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">Select Image</div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of allImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal> -->\n \n\n\n\n<sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">\n    Select Image\n  </div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <!-- <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a> -->\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'myImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'myImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search Btn</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search btn</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal>\n\n<sui-modal class=\"sb-modal overflow-modal uploadPopup\" [isClosable]=\"true\" [isInverted]=\"false\"\n  (dismissed)=\"dismissImageUploadModal()\" *ngIf=\"showImageUploadModal\" [size]=\"'large'\" [isFullScreen]=\"false\"\n  [mustScroll]=\"true\" appBodyScroll #modal>\n  <div class=\"sb-modal-header\">Upload And Use</div>\n  <div class=\"p-10 sb-bg-white\">\n    <div class=\"d-flex\">\n      <div class=\"w-50\">\n        <div class=\"content\">\n          <h6 class=\"mb-8 fs-normal\">Choose or drag and drop your image here*<span class=\"red\">*</span></h6>\n          <div class=\"upload-image-modal-section d-flex flex-ai-center flex-jc-center flex-dc\">\n            <ng-container>\n              <button class=\"upload-input-button sb-btn sb-btn-success sb-btn-normal\">Upload from Computer\n                <input (change)=\"uploadImage($event)\" type=\"file\" [accept]=\"acceptImageType\" name=\"assetfile\">\n              </button>\n              <div class=\"py-10 fs-0-785 sb-color-primary\" *ngIf=\"imageUploadLoader\"> {{assetName}} </div>\n              <span class=\"fsmall mt-8\">Upload png, jpeg (Max File size: 1MB)</span>\n              <div *ngIf=\"showErrorMsg\" class=\"sb-color-error fsmall mt-8\">\n                <p>{{errorMsg}}</p>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"ui info message sb-info-bx\">\n            <ul class=\"list\">\n              <li class=\"fs-0785\">Allowed file types are: png, jpeg\n              </li>\n              <li class=\"fs-0785\">Maximum allowed file size: 1MB\n              </li>\n            </ul>\n          </div>\n          <h6 class=\"fs-0785\">Copyright & License*<span class=\"red\">*</span></h6>\n          <p class=\"fsmall mt-8 terms-and-condition\">I understand and confirm that all resources and assets created through the content editor or uploaded on the platform shall be available for free and public use without limitations on the platform (web portal, applications and any other end user interface that the platform would enable) and will be licensed under terms & conditions and policy guidelines of the platform. In doing so, the copyright and license of the original author is not infringed.</p>\n        </div>\n      </div>\n      <div class=\"w-50 pl-10 ml-10 b-bl\">\n        <div class=\"ui info message sb-info-bx mb-0\">\n          <ul class=\"list\">\n            <li class=\"fs-0785 font-weight-bold\">\n              <i class=\"icon info circle\" aria-hidden=\"true\"></i>\n              Drop or choose file to upload before entering the details\n            </li>\n          </ul>\n        </div>\n        <div class=\"sb-form-fields\">\n          <div class=\"form-container upload-form\">\n            <sb-dynamic-form [config]=\"initialFormConfig\"\n              (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sb-modal-actions flex-jc-space-between p-0\">\n      <div>\n        <button (click)=\"dismissPops(modal);\" class=\"mr-10 sb-btn sb-btn-primary sb-btn-normal\">Cancel</button>\n        <button (click)=\"uploadAndUseImage(modal);\" [disabled]=\"!imageFormValid\"\n        [ngClass]=\"{'sb-btn-primary': imageFormValid, 'sb-btn-disabled': !imageFormValid}\"\n        class=\"sb-btn  sb-btn-normal text-left\">Upload And Use</button>\n      </div>\n      <div>\n        <button (click)=\"dismissImageUploadModal();\" class=\" sb-btn sb-btn-primary sb-btn-normal\">Back</button>\n      </div>\n    </div>\n  </div>\n</sui-modal>",
                styles: [".editorWrapper{border:0 solid #fff}.editorWrapper.hasError{border:0 solid red}.characterCount{text-align:right;border-top:0;padding-right:7px;font-size:11px;font-weight:700;margin-top:-16px;position:relative}.custom-image img{border:1px dotted;padding:7px;margin:6px;cursor:pointer}.resource-image{height:180px!important}.asset_container{overflow-y:auto;overflow-x:hidden;min-height:300px!important;max-height:300px!important;padding:5px}.insert-image-btn{position:absolute;z-index:1;left:315px;background-color:transparent;padding:12px 14px!important;margin-left:6px}.insert-image-btn>.icon{opacity:1}.insert-image-btn:active{background-color:transparent}.upload-file-description p{color:#999}.upload-file-description ul{margin:0;list-style:disc}.upload-file-description ul li{margin-bottom:8px}.upload-file-description ul li a{cursor:pointer;font-size:12px}.sb-grid-layout{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));grid-gap:16px}.sb-grid-layout.image{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}.sb-grid-layout.video{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.sb-grid-layout .sb-video-content .sb-image-section{height:96px;overflow:hidden;border-radius:4px;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.5)}.sb-grid-layout .sb-video-content .sb-image-section img{width:100%;height:100%;cursor:pointer}.overlay-image{width:100%;height:100%;background:rgba(0,0,0,.3);position:absolute;left:0;right:0;cursor:pointer}.overlay-image .play.icon{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;color:rgba(255,255,255,.6);font-size:32px;cursor:pointer}.upload-image-modal-section{border-radius:4px;width:100%;min-height:140px;background:#f5f9fc;border:1px dashed #024f9d}.upload-file-section{display:flex;height:240px;width:100%;max-width:800px;align-items:center;justify-content:center;flex-direction:column;margin:0 auto;background-color:#f5f9fc;border:1px dashed #80a7ce}.qq-uploader.qq-uploader-selector.custom-qq-uploader{background:inherit;border:none;max-height:inherit;min-height:inherit;overflow-y:inherit;width:688px;height:240px;display:flex;justify-content:center;align-items:center}.terms-and-condition{line-height:14px}.red{color:red}.b-bl{border-left:1px solid #e4e1e1}.sb-color-grey{color:#666}.flex-jc-space-end{justify-content:flex-end!important}.fs-0785{font-size:.785rem!important}.ui.info.message{color:#276f86!important}.sb-textbox[disabled=true]{opacity:.3!important;font-weight:500!important}.sb-tabset-segment{min-height:288px;max-height:288px;overflow-y:auto}input:focus-visible{border:none!important}"]
            }] }
];
/** @nocollapse */
AssetBrowserComponent.ctorParameters = () => [
    { type: ImageSearchService },
    { type: SbToastService }
];
AssetBrowserComponent.propDecorators = {
    showImagePicker: [{ type: Input }],
    assetBrowserEmitter: [{ type: Output }],
    modalDismissEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AssetBrowserComponent.prototype.showImagePicker;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetBrowserEmitter;
    /** @type {?} */
    AssetBrowserComponent.prototype.modalDismissEmitter;
    /** @type {?} */
    AssetBrowserComponent.prototype.showImageUploadModal;
    /** @type {?} */
    AssetBrowserComponent.prototype.isClosable;
    /** @type {?} */
    AssetBrowserComponent.prototype.myImages;
    /** @type {?} */
    AssetBrowserComponent.prototype.appIcon;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetsCount;
    /** @type {?} */
    AssetBrowserComponent.prototype.searchMyInput;
    /** @type {?} */
    AssetBrowserComponent.prototype.searchAllInput;
    /** @type {?} */
    AssetBrowserComponent.prototype.myAssets;
    /** @type {?} */
    AssetBrowserComponent.prototype.allImages;
    /** @type {?} */
    AssetBrowserComponent.prototype.query;
    /** @type {?} */
    AssetBrowserComponent.prototype.formData;
    /** @type {?} */
    AssetBrowserComponent.prototype.assestData;
    /** @type {?} */
    AssetBrowserComponent.prototype.formConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetName;
    /** @type {?} */
    AssetBrowserComponent.prototype.showErrorMsg;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.errorMsg;
    /** @type {?} */
    AssetBrowserComponent.prototype.imageUploadLoader;
    /** @type {?} */
    AssetBrowserComponent.prototype.acceptImageType;
    /** @type {?} */
    AssetBrowserComponent.prototype.initialFormConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.imageFormValid;
    /** @type {?} */
    AssetBrowserComponent.prototype.emptySearchMessage;
    /**
     * @type {?}
     * @private
     */
    AssetBrowserComponent.prototype.imageSearchService;
    /**
     * @type {?}
     * @private
     */
    AssetBrowserComponent.prototype.sbToastService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/events.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventsModule {
}
EventsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EventDetailComponent,
                    EventListComponent,
                    EventCreateComponent,
                    JoinEventComponent,
                    AdvanceEventDetailComponent,
                    CoverEventDetailComponent,
                    EventFilterComponent,
                    CollectionIconComponent,
                    AssetBrowserComponent
                ],
                imports: [
                    CommonModule,
                    CommonFormElementsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EventRoutingModule,
                    NgxIziToastModule,
                    HttpClientModule,
                    NgxPaginationModule,
                    SuiModule,
                    InfiniteScrollModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: httpTranslateLoader,
                            deps: [HttpClient]
                        }
                    })
                ],
                exports: [
                    EventDetailComponent,
                    EventListComponent,
                    EventCreateComponent,
                    JoinEventComponent,
                    AdvanceEventDetailComponent,
                    CoverEventDetailComponent,
                    EventFilterComponent
                ],
                providers: []
            },] }
];
// AOT compilation support
/**
 * @param {?} http
 * @return {?}
 */
function httpTranslateLoader(http) {
    return new TranslateHttpLoader(http);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-list/event-list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventListService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event list
     * @return {?}
     */
    getEventList() {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().list
        };
        return this.dataService.get(req);
    }
    /**
     * @return {?}
     */
    getEventFilters() {
        // return this.http.get<any>('assets/eventFilter.json');
    }
}
EventListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventListService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventListService.ngInjectableDef = ɵɵdefineInjectable({ factory: function EventListService_Factory() { return new EventListService(ɵɵinject(UserConfigService), ɵɵinject(DataService)); }, token: EventListService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventListService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventListService.prototype.dataService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventLibraryModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forChild(config) {
        return {
            ngModule: EventLibraryModule,
            providers: [
                EventLibraryService,
                {
                    provide: "urlConfig",
                    useValue: config
                }
            ]
        };
    }
}
EventLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EventLibraryComponent],
                imports: [
                    EventsModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                ],
                exports: [EventsModule,
                ],
                providers: [
                    EventDetailService,
                    EventCreateService,
                    EventListService,
                    EventLibraryService,
                    SbToastService,
                    TimezoneCal,
                    UserConfigService,
                    DataService,
                    EventService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tekdi-ngtek-event-library.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DataService, EventCreateComponent, EventCreateService, EventDetailComponent, EventDetailService, EventLibraryComponent, EventLibraryModule, EventLibraryService, EventListComponent, EventListService, EventService, SbToastService, TimezoneCal, UserConfigService, EventsModule as ɵa, httpTranslateLoader as ɵb, ImageSearchService as ɵc, JoinEventComponent as ɵd, AdvanceEventDetailComponent as ɵe, CoverEventDetailComponent as ɵf, EventFilterComponent as ɵg, CollectionIconComponent as ɵh, AssetBrowserComponent as ɵi, EventRoutingModule as ɵj };
//# sourceMappingURL=tekdi-ngtek-event-library.js.map
