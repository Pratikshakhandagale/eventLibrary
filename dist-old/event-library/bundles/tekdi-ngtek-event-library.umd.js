(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngx-translate/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('ngx-izitoast'), require('lodash-es'), require('common-form-elements'), require('@ngx-translate/http-loader'), require('ngx-pagination'), require('ng2-semantic-ui/dist'), require('ngx-infinite-scroll'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@tekdi/ngtek-event-library', ['exports', '@angular/core', '@ngx-translate/core', '@angular/common', '@angular/router', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/forms', 'ngx-izitoast', 'lodash-es', 'common-form-elements', '@ngx-translate/http-loader', 'ngx-pagination', 'ng2-semantic-ui/dist', 'ngx-infinite-scroll', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory((global.tekdi = global.tekdi || {}, global.tekdi['ngtek-event-library'] = {}), global.ng.core, global.core$1, global.ng.common, global.ng.router, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.forms, global.ngxIzitoast, global.lodashEs, global.commonFormElements, global.httpLoader, global.ngxPagination, global.dist, global.ngxInfiniteScroll, global.ng.platformBrowser.animations));
}(this, (function (exports, core, core$1, common, router, http, rxjs, operators, forms, ngxIzitoast, lodashEs, commonFormElements, httpLoader, ngxPagination, dist, ngxInfiniteScroll, animations) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/event-library.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EventLibraryService = /** @class */ (function () {
        function EventLibraryService(translate, config) {
            this.translate = translate;
            this.config = config;
            this.apiUrlConfig = config.urlConfig;
            translate.setDefaultLang('en');
        }
        EventLibraryService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventLibraryService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: ["urlConfig",] }] }
        ]; };
        /** @nocollapse */ EventLibraryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EventLibraryService_Factory() { return new EventLibraryService(core.ɵɵinject(core$1.TranslateService), core.ɵɵinject("urlConfig", 8)); }, token: EventLibraryService, providedIn: "root" });
        return EventLibraryService;
    }());
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
    var EventLibraryComponent = /** @class */ (function () {
        function EventLibraryComponent() {
        }
        /**
         * @return {?}
         */
        EventLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        EventLibraryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-event-library',
                        template: "\n    <p>\n      event-library works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        EventLibraryComponent.ctorParameters = function () { return []; };
        return EventLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/events/components/labels.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var labelMessages = {
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
    var UserConfigService = /** @class */ (function () {
        function UserConfigService(eventLibraryService) {
            this.eventLibraryService = eventLibraryService;
        }
        /**
         * @return {?}
         */
        UserConfigService.prototype.getConfigUrl = /**
         * @return {?}
         */
        function () {
            return this.eventLibraryService.apiUrlConfig;
        };
        UserConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserConfigService.ctorParameters = function () { return [
            { type: EventLibraryService }
        ]; };
        /** @nocollapse */ UserConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserConfigService_Factory() { return new UserConfigService(core.ɵɵinject(EventLibraryService)); }, token: UserConfigService, providedIn: "root" });
        return UserConfigService;
    }());
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
    var DataService = /** @class */ (function () {
        function DataService(userConfigService, http) {
            this.userConfigService = userConfigService;
            this.http = http;
            /**
             * Contains base Url for api end points
             */
            this.baseUrl = this.userConfigService.getConfigUrl().host;
        }
        /**
       * for preparing headers
       */
        /**
         * for preparing headers
         * @private
         * @param {?=} headers
         * @return {?}
         */
        DataService.prototype.getHeader = /**
         * for preparing headers
         * @private
         * @param {?=} headers
         * @return {?}
         */
        function (headers) {
            /** @type {?} */
            var default_headers = {
                Accept: 'application/json',
                Authorization: 'Bearer key',
            };
            return default_headers;
        };
        /**
       * for making post api calls
       * @param RequestParam requestParam interface
       */
        /**
         * for making post api calls
         * @param {?} requestParam
         * @return {?}
         */
        DataService.prototype.post = /**
         * for making post api calls
         * @param {?} requestParam
         * @return {?}
         */
        function (requestParam) {
            /** @type {?} */
            var httpOptions = {
                headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
                params: requestParam.param
            };
            return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(operators.mergeMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.responseCode !== 'OK') {
                    return rxjs.throwError(data);
                }
                return rxjs.of(data);
            })));
        };
        /**
       * for making get api calls
       *
       * @param requestParam interface
       */
        /**
         * for making get api calls
         *
         * @param {?} requestParam interface
         * @return {?}
         */
        DataService.prototype.get = /**
         * for making get api calls
         *
         * @param {?} requestParam interface
         * @return {?}
         */
        function (requestParam) {
            /** @type {?} */
            var httpOptions = {
                headers: requestParam.header ? requestParam.header : this.getHeader(),
                params: requestParam.param
            };
            return this.http.get(requestParam.url, httpOptions).pipe(operators.mergeMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return rxjs.of(data);
            })));
        };
        /**
      * for making post api calls
      * @param RequestParam requestParam interface
      */
        /**
         * for making post api calls
         * @param {?} requestParam
         * @return {?}
         */
        DataService.prototype.patch = /**
         * for making post api calls
         * @param {?} requestParam
         * @return {?}
         */
        function (requestParam) {
            /** @type {?} */
            var httpOptions = {
                headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
                params: requestParam.param
            };
            return this.http.patch(requestParam.url, requestParam.data, httpOptions).pipe(operators.mergeMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.responseCode !== 'OK') {
                    return rxjs.throwError(data);
                }
                return rxjs.of(data);
            })));
        };
        DataService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DataService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DataService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(core.ɵɵinject(UserConfigService), core.ɵɵinject(http.HttpClient)); }, token: DataService, providedIn: "root" });
        return DataService;
    }());
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
    var EventDetailService = /** @class */ (function () {
        function EventDetailService(userConfigService, dataService) {
            this.userConfigService = userConfigService;
            this.dataService = dataService;
        }
        /**
         * For get event detail
         */
        /**
         * For get event detail
         * @param {?} identifier
         * @return {?}
         */
        EventDetailService.prototype.getEvent = /**
         * For get event detail
         * @param {?} identifier
         * @return {?}
         */
        function (identifier) {
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().detail + identifier
            };
            return this.dataService.get(req);
        };
        /**
         * For enroll/unenroll user
         */
        /**
         * For enroll/unenroll user
         * @param {?} cId
         * @param {?} uId
         * @return {?}
         */
        EventDetailService.prototype.enrollUser = /**
         * For enroll/unenroll user
         * @param {?} cId
         * @param {?} uId
         * @return {?}
         */
        function (cId, uId) {
            //param : cid and uid
            //let apiUrl = '' + this.eventLibraryService.userID;
            //return this.http.get<any>(apiUrl);
            //param : cid and uid
            //let apiUrl = '' + this.eventLibraryService.userID;
            //return this.http.get<any>(apiUrl);
            /** @type {?} */
            var requestBody = {
                request: {
                    "courseId": cId,
                    "userId": uId,
                    "fixedBatchId": "event_batch_id"
                }
            };
        };
        EventDetailService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventDetailService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: DataService }
        ]; };
        /** @nocollapse */ EventDetailService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EventDetailService_Factory() { return new EventDetailService(core.ɵɵinject(UserConfigService), core.ɵɵinject(DataService)); }, token: EventDetailService, providedIn: "root" });
        return EventDetailService;
    }());
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
    var EventDetailComponent = /** @class */ (function () {
        function EventDetailComponent(activatedRoute, eventDetailService) {
            this.activatedRoute = activatedRoute;
            this.eventDetailService = eventDetailService;
            this.labelMessages = labelMessages;
        }
        /**
         * @return {?}
         */
        EventDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.activatedRoute.queryParams.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.queryParams = params;
            }));
            if (this.queryParams.identifier) {
                this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.eventDetailItem = data.result.event;
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    console.log('err = ', err);
                }));
            }
        };
        EventDetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-event-detail',
                        template: "<div class=\"event-wrapper\">\n    <sb-cover-event-detail [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\"></sb-cover-event-detail>\n    <sb-join-event-button [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\" [canUnenroll]=\"canUnenroll\"></sb-join-event-button>\n    <sb-advance-event-detail [eventDetailItem]=\"eventDetailItem\"></sb-advance-event-detail>\n\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        EventDetailComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute },
            { type: EventDetailService }
        ]; };
        EventDetailComponent.propDecorators = {
            eventDetailItem: [{ type: core.Input }],
            userData: [{ type: core.Input }],
            canUnenroll: [{ type: core.Input }]
        };
        return EventDetailComponent;
    }());
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
    var EventListComponent = /** @class */ (function () {
        function EventListComponent(router, translate) {
            this.router = router;
            this.translate = translate;
            this.paginateLimit = 5;
            this.eventDetailData = new core.EventEmitter();
            this.redirectToDetail = new core.EventEmitter();
            this.redirection = 'event';
            //translate.setDefaultLang('en');
        }
        /**
         * @return {?}
         */
        EventListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /*onEventWrapper(identifier) {
          alert('hiii2');
          
          this.router.navigate([this.redirection], {
            queryParams: {
              identifier: identifier,
              view: 'detail'
            }
          });
        }*/
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
        EventListComponent.prototype.navToEventDetail = /*onEventWrapper(identifier) {
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
        function (res) {
            this.eventDetailData.emit(res);
        };
        EventListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-event-list',
                        template: "<div class=\" sbt-page-content-area\">\n    <div class=\"card-container\">\n        <div class=\"masonry-grid \" *ngIf=\"list\">\n            <div class=\"masonry-item\"  *ngFor=\"let event of list | paginate: { itemsPerPage: paginateLimit, currentPage: p }\">\n                <!-- <div class=\"sb-card\" (click)=\"onEventWrapper(event?.identifier);navToEventDetail(event)\" tabindex=\"0\"> -->\n\n                <div class=\"sb-card\" (click)=\"navToEventDetail(event)\" tabindex=\"0\">\n                    <div class=\"sb-card-body\">\n                        <div class=\"sb-card-metas\">\n                            <div class=\"sb-card-image mr-16\">\n                                <img src=\"./assets/images/eventcover.jpg\">\n                            </div>\n                            <div class=\"sb-card-meta course\">\n                                <div *ngIf=\"event?.audience\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'audience' | translate}}: {{event?.audience}}\n                                </div>\n                                <div *ngIf=\"event?.onlineProvider\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'eventtype' | translate}}: {{event?.onlineProvider}}\n                                </div>\n                                <div *ngIf=\"event?.status\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'Status' | translate}}: {{event?.status}}\n                                </div>\n                                <div *ngIf=\"event?.startDate\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'startdate' | translate}}: {{event?.startDate}}\n                                </div>\n                            </div>\n                        </div>\n                        <h4 *ngIf=\"event?.name\" class=\"sb-card-title\">\n                            {{event?.name}}\n                        </h4>\n                        <!-- <div *ngIf=\"event?.status\" class=\"sb-card-org ellipsis \">\n                {{event?.status}} \n              </div> -->\n                        <div class=\"sb-label-status sb-label-status-success ml-auto mr-15 p-10 mt-8\">\n                            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span> {{event?.eventType}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n              <pagination-controls (pageChange)=\"p = $event\"  *ngIf=\"list\"></pagination-controls>        \n    </div>\n</div>",
                        styles: [".card-container{margin:1.5rem}.filter-container{margin:5rem}.sb-card{margin-left:3.5rem;margin-bottom:2rem}a.disabled{color:gray;pointer-events:none;cursor:default}"]
                    }] }
        ];
        /** @nocollapse */
        EventListComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: core$1.TranslateService }
        ]; };
        EventListComponent.propDecorators = {
            list: [{ type: core.Input }],
            paginateLimit: [{ type: core.Input }],
            eventDetailData: [{ type: core.Output }],
            redirectToDetail: [{ type: core.Output }],
            redirection: [{ type: core.Input }]
        };
        return EventListComponent;
    }());
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
    var SbToastService = /** @class */ (function () {
        function SbToastService(iziToast) {
            this.iziToast = iziToast;
        }
        /**
         * For show toast message
         */
        /**
         * For show toast message
         * @param {?} message
         * @param {?} type
         * @return {?}
         */
        SbToastService.prototype.showIziToastMsg = /**
         * For show toast message
         * @param {?} message
         * @param {?} type
         * @return {?}
         */
        function (message, type) {
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
        };
        /**
         * Destroys IziToast
         */
        /**
         * Destroys IziToast
         * @return {?}
         */
        SbToastService.prototype.destroyIzitoast = /**
         * Destroys IziToast
         * @return {?}
         */
        function () {
            this.iziToast.destroy();
        };
        SbToastService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SbToastService.ctorParameters = function () { return [
            { type: ngxIzitoast.NgxIzitoastService }
        ]; };
        /** @nocollapse */ SbToastService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SbToastService_Factory() { return new SbToastService(core.ɵɵinject(ngxIzitoast.NgxIzitoastService)); }, token: SbToastService, providedIn: "root" });
        return SbToastService;
    }());
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
    var EventCreateService = /** @class */ (function () {
        function EventCreateService(userConfigService, dataService, sbToastService) {
            this.userConfigService = userConfigService;
            this.dataService = dataService;
            this.sbToastService = sbToastService;
        }
        /**
         * For get event form config
         */
        /**
         * For get event form config
         * @return {?}
         */
        EventCreateService.prototype.getEventFormConfig = /**
         * For get event form config
         * @return {?}
         */
        function () {
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().eventFormConfigApi
            };
            return this.dataService.get(req);
        };
        /**
       * For post event data
       */
        /**
         * For post event data
         * @param {?} formData
         * @return {?}
         */
        EventCreateService.prototype.createEvent = /**
         * For post event data
         * @param {?} formData
         * @return {?}
         */
        function (formData) {
            /** @type {?} */
            var requestBody = {
                request: {
                    event: formData
                }
            };
            /** @type {?} */
            var option = {
                url: this.userConfigService.getConfigUrl().create,
                data: requestBody,
                header: { 'Content-Type': 'application/json' }
            };
            return this.dataService.post(option);
            // .subscribe((data)=>{
            //   console.log({data});
            // });
            this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
        };
        /**
         * @param {?} formData
         * @return {?}
         */
        EventCreateService.prototype.updateEvent = /**
         * @param {?} formData
         * @return {?}
         */
        function (formData) {
            /** @type {?} */
            var requestBody = {
                request: {
                    event: formData
                }
            };
            /** @type {?} */
            var option = {
                url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
                data: requestBody,
                header: { 'Content-Type': 'application/json' }
            };
            return this.dataService.patch(option);
            // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
        };
        /**
         * For publish event
         */
        /**
         * For publish event
         * @param {?} identifier
         * @return {?}
         */
        EventCreateService.prototype.publishEvent = /**
         * For publish event
         * @param {?} identifier
         * @return {?}
         */
        function (identifier) {
            /** @type {?} */
            var option = {
                url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
                header: { 'Content-Type': 'application/json' }
            };
            return this.dataService.post(option);
        };
        EventCreateService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventCreateService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: DataService },
            { type: SbToastService }
        ]; };
        /** @nocollapse */ EventCreateService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EventCreateService_Factory() { return new EventCreateService(core.ɵɵinject(UserConfigService), core.ɵɵinject(DataService), core.ɵɵinject(SbToastService)); }, token: EventCreateService, providedIn: "root" });
        return EventCreateService;
    }());
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
    var TimezoneCal = /** @class */ (function () {
        function TimezoneCal() {
            /**
             * For get timezone code
             * @return string (Eg : IST)
             */
            this.timeZoneAbbreviated = (/**
             * @return {?}
             */
            function () {
                var tz = new Date().toString().match(/\((.+)\)/)[1];
                if (tz.includes(" ")) {
                    return tz
                        .split(" ")
                        .map((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var _b = __read(_a, 1), first = _b[0];
                        return first;
                    }))
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
         * @param date event date
         * @param time event time
         * @returns location base date & time
         */
        /**
         * For fing current location time
         *
         * @param {?} date event date
         * @param {?} time event time
         * @return {?} location base date & time
         */
        TimezoneCal.prototype.calcTime = /**
         * For fing current location time
         *
         * @param {?} date event date
         * @param {?} time event time
         * @return {?} location base date & time
         */
        function (date, time) {
            // create Date object for current location
            /** @type {?} */
            var d = new Date(date + " " + time);
            /** @type {?} */
            var offset = d.getTimezoneOffset() / -60;
            //alert(date + ' - ' + time);
            // convert to msec
            // add local time zone offset
            // get UTC time in msec
            /** @type {?} */
            var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            // create new Date object for different city
            // using supplied offset
            return new Date(utc + (3600000 * offset));
        };
        /**
         * To get time offset
         * @returns offset (eg +5.30 etc)
         */
        /**
         * To get time offset
         * @return {?} offset (eg +5.30 etc)
         */
        TimezoneCal.prototype.getTimeOffset = /**
         * To get time offset
         * @return {?} offset (eg +5.30 etc)
         */
        function () {
            /** @type {?} */
            var date = new Date();
            /** @type {?} */
            var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
            /** @type {?} */
            var offset = Math.abs(date.getTimezoneOffset());
            /** @type {?} */
            var hours = this.pad(Math.floor(offset / 60));
            /** @type {?} */
            var minutes = this.pad(offset % 60);
            return sign + hours + ":" + minutes;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TimezoneCal.prototype.pad = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value < 10 ? '0' + value : value;
        };
        TimezoneCal.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TimezoneCal.ctorParameters = function () { return []; };
        /** @nocollapse */ TimezoneCal.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TimezoneCal_Factory() { return new TimezoneCal(); }, token: TimezoneCal, providedIn: "root" });
        return TimezoneCal;
    }());
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
    var ImageSearchService = /** @class */ (function () {
        function ImageSearchService(userConfigService, dataService) {
            this.userConfigService = userConfigService;
            this.dataService = dataService;
        }
        /**
       * For get event detail
       */
        /**
         * For get event detail
         * @return {?}
         */
        ImageSearchService.prototype.getEditMode = /**
         * For get event detail
         * @return {?}
         */
        function () {
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().EditModeApi
            };
            return this.dataService.get(req);
        };
        /**
         * @param {?} request
         * @return {?}
         */
        ImageSearchService.prototype.getMyImages = /**
         * @param {?} request
         * @return {?}
         */
        function (request) {
            /** @type {?} */
            var reqParam = {
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
            reqParam.data.request = request ? lodashEs.merge({}, reqParam.data.request, request) : reqParam;
            console.log(reqParam);
            return this.dataService.get(reqParam);
        };
        /**
         * @param {?=} req
         * @return {?}
         */
        ImageSearchService.prototype.createMediaAsset = /**
         * @param {?=} req
         * @return {?}
         */
        function (req) {
            /** @type {?} */
            var reqParam = {
                url: lodashEs.get(this.userConfigService.getConfigUrl(), 'createImage'),
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
            reqParam.data.request = req ? lodashEs.merge({}, reqParam.data.request, req) : reqParam;
            return this.dataService.post(reqParam);
        };
        /**
         * @param {?} req
         * @param {?} assetId
         * @return {?}
         */
        ImageSearchService.prototype.uploadMedia = /**
         * @param {?} req
         * @param {?} assetId
         * @return {?}
         */
        function (req, assetId) {
            /** @type {?} */
            var reqParam = {
                // url: `${this.configService.urlConFig.URLS.CONTENT.UPLOAD}${assetId}`,
                url: this.userConfigService.getConfigUrl().EditModeApi,
                data: req.data
            };
            reqParam = req ? lodashEs.merge({}, reqParam, req) : reqParam;
            return this.dataService.post(reqParam);
        };
        ImageSearchService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ImageSearchService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: DataService }
        ]; };
        /** @nocollapse */ ImageSearchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ImageSearchService_Factory() { return new ImageSearchService(core.ɵɵinject(UserConfigService), core.ɵɵinject(DataService)); }, token: ImageSearchService, providedIn: "root" });
        return ImageSearchService;
    }());
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
    var EventCreateComponent = /** @class */ (function () {
        function EventCreateComponent(activatedRoute, eventCreateService, eventDetailService, router, location, sbToastService, formBuilder, timezoneCal, translate, userConfigService, imageSearchService) {
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
            this.closeSaveForm = new core.EventEmitter();
            this.navAfterSave = new core.EventEmitter();
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
                startDate: this.todayDate,
                endDate: this.todayDate,
                startTime: this.startTime,
                endTime: this.endTime,
                registrationStartDate: this.todayDate,
                registrationEndDate: this.todayDate,
            });
        }
        // Ankita changes
        // Ankita changes
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.ngOnChanges = 
        // Ankita changes
        /**
         * @return {?}
         */
        function () {
            this.setAppIconData();
        };
        // Ankita changes
        // Ankita changes
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.setAppIconData = 
        // Ankita changes
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isRootNode = true;
            //this.appIconConfig = _.find(_.flatten(_.map(this.rootFormConfig, 'fields')), {code: 'appIcon'});
            // if (!_.isUndefined(this.appIconConfig) && isRootNode === true) {
            //   this.showAppIcon = true;
            // } else {
            //   this.showAppIcon = false;
            // }
            // this.appIcon = _.get(this.nodeMetadata, 'data.metadata.appIcon');
            this.appIcon = "";
            if (this.isReviewMode()) {
                this.appIconConfig = __assign({}, this.appIconConfig, { isAppIconEditable: false });
            }
            else {
                this.appIconConfig = __assign({}, this.appIconConfig, { isAppIconEditable: true });
            }
            // const ifEditable = this.ifFieldIsEditable('appIcon');
        };
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.isReviewMode = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.imageSearchService.getEditMode().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.editmode = data.d.edit;
            }));
            return lodashEs.includes(['review', 'read', 'sourcingreview'], this.editmode);
        };
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
            // setTimeout(() =>{
            // alert(this.userId);
            // });
            this.activatedRoute.queryParams.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.queryParams = params;
                if (_this.queryParams.identifier) {
                    _this.isNew = false;
                }
            }));
            if (this.queryParams.identifier) {
                this.eventCreateService.getEventFormConfig().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.formFieldProperties = data.result['form'].data.fields;
                }));
                this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.queryParams = data.result.event;
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    console.log('err = ', err);
                }));
            }
            if (this.queryParams.identifier) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    return _this.initializeFormFields();
                }), 500);
            }
            /** @type {?} */
            var group = {};
        };
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.initializeFormFields = /**
         * @return {?}
         */
        function () {
            var _this = this;
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
            function (formField) {
                if (formField.code in _this.queryParams) {
                    if (formField.code == 'venue') {
                        formField.default = _this.queryParams[formField.code]['name'];
                        editValues[formField.code] = _this.queryParams[formField.code]['name'];
                    }
                    else if (formField.code == 'onlineProviderData') {
                        formField.default = _this.queryParams[formField.code]['meetingLink'];
                        editValues[formField.code] = _this.queryParams[formField.code]['meetingLink'];
                    }
                    else {
                        formField.default = _this.queryParams[formField.code];
                        editValues[formField.code] = _this.queryParams[formField.code];
                    }
                }
            }));
            this.formValues = editValues;
            this.formFieldData = this.formFieldProperties;
            console.log(this.formFieldData);
            console.log(this.formValues);
            this.customFields = this.formBuilder.group({
                startDate: eventStart.getFullYear() + '-' + ('0' + (eventStart.getMonth() + 1)).slice(-2) + '-' + ('0' + eventStart.getDate()).slice(-2),
                endDate: eventEnd.getFullYear() + '-' + ('0' + (eventEnd.getMonth() + 1)).slice(-2) + '-' + ('0' + eventEnd.getDate()).slice(-2),
                startTime: (('0' + (eventStart.getHours()))).slice(-2) + ":" + ('0' + eventStart.getMinutes()).slice(-2) + ":" + ('0' + eventStart.getSeconds()).slice(-2),
                endTime: (('0' + (eventEnd.getHours()))).slice(-2) + ":" + ('0' + eventEnd.getMinutes()).slice(-2) + ":" + ('0' + eventEnd.getSeconds()).slice(-2),
                registrationStartDate: this.queryParams['registrationStartDate'],
                registrationEndDate: this.queryParams['registrationEndDate'],
            });
        };
        /**
         * @param {?} eventData
         * @return {?}
         */
        EventCreateComponent.prototype.valueChanges = /**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) {
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
                    function (formField) {
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
                    function (item) { return item.code !== 'onlineProvider'; }));
                    this.formFieldProperties = this.formFieldProperties.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.code !== 'onlineProviderData'; }));
                }
                else if (eventData.eventType == "Online") {
                    this.formFieldProperties = this.formFieldProperties.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.code !== 'venue'; }));
                }
            }
        };
        /**
         * For validate data and call post form service
         */
        /**
         * For validate data and call post form service
         * @param {?} canPublish
         * @return {?}
         */
        EventCreateComponent.prototype.postData = /**
         * For validate data and call post form service
         * @param {?} canPublish
         * @return {?}
         */
        function (canPublish) {
            var _this = this;
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
                    function (data) {
                        if (data.responseCode == "OK") {
                            _this.dataSubmitted(data);
                        }
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        console.log({ err: err });
                        _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
                    }));
                }
                else {
                    this.formValues['versionKey'] = this.queryParams.versionKey;
                    this.eventCreateService.updateEvent(this.formValues).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        if (data.responseCode == "OK") {
                            _this.dataSubmitted(data);
                        }
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        console.log({ err: err });
                        _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
                    }));
                }
            }
        };
        /**
         * @param {?} data
         * @return {?}
         */
        EventCreateComponent.prototype.dataSubmitted = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            if (this.canPublish) {
                this.eventCreateService.publishEvent(data.result.identifier).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    _this.navAfterSave.emit(data);
                    _this.sbToastService.showIziToastMsg("Event Created Successfully", 'success');
                }));
            }
            else {
                this.navAfterSave.emit(data);
                this.sbToastService.showIziToastMsg("Event Created Successfully", 'success');
            }
        };
        /**
         * @return {?}
         */
        EventCreateComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
            this.closeSaveForm.emit();
            //this.location.back()
        };
        /**
         * For time validation
         *
         * @param sdate Contains data
         * @param time Contains time
         * @returns Return true if event start time is greater current time
         */
        /**
         * For time validation
         *
         * @param {?} date
         * @param {?} time Contains time
         * @return {?} Return true if event start time is greater current time
         */
        EventCreateComponent.prototype.timeValidation = /**
         * For time validation
         *
         * @param {?} date
         * @param {?} time Contains time
         * @return {?} Return true if event start time is greater current time
         */
        function (date, time) {
            /** @type {?} */
            var startEventTime = new Date(date + " " + time);
            /** @type {?} */
            var startDifference = startEventTime.getTime() - this.today.getTime();
            /** @type {?} */
            var timeDiff = Math.round(startDifference / 60000);
            return (timeDiff > 0) ? true : false;
        };
        /**
         * For date validation
         *
         * @param sdate Contains start data
         * @param edate Contains end data
         * @returns
         */
        /**
         * For date validation
         *
         * @param {?} sdate Contains start data
         * @param {?} edate Contains end data
         * @return {?}
         */
        EventCreateComponent.prototype.dateValidation = /**
         * For date validation
         *
         * @param {?} sdate Contains start data
         * @param {?} edate Contains end data
         * @return {?}
         */
        function (sdate, edate) {
            /** @type {?} */
            var startEventDate = new Date(sdate);
            /** @type {?} */
            var endEventDate = new Date(edate);
            /** @type {?} */
            var startDifference = endEventDate.getTime() - startEventDate.getTime();
            /** @type {?} */
            var timeDiff = Math.round(startDifference / 60000);
            return (timeDiff >= 0) ? true : false;
        };
        // Ankita
        // Ankita
        /**
         * @param {?} event
         * @return {?}
         */
        EventCreateComponent.prototype.appIconDataHandler = 
        // Ankita
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            console.log(event, "= onclickmethd");
            // this.appIcon = event.url;
            // this.treeService.updateAppIcon(event.url);
        };
        EventCreateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-event-create',
                        template: "<div class=\"p-40\">\n\n    <h1 class=\"mt-20 mb-20\">{{'createnewevent' | translate}}</h1>\n    <ng-container *ngIf=\"isNew;then New; else Edit\">\n    </ng-container>\n    <ng-template #New>\n        <sb-dynamic-form *ngIf=\"formFieldProperties\" class=\"label-1\" [config]=\"formFieldProperties\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n    <ng-template #Edit>\n        <sb-dynamic-form *ngIf=\"formFieldData\" class=\"label-1\" [config]=\"formFieldData\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n\n    <!-- <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let field of customFieldsForm\" class=\"d-flex flex-jc-space-between\">\n            <div class=\"mb-12 w-100\">\n                <div class=\"mb-5 fs-0-785\">{{field.code}}</div>\n                \n                <input *ngIf=\"field.dataType == 'text'\" class=\"fsmall sb-textbox text-uppercase py-8 w-85 px-16\" formControlName=\"field.code\" type=\"text\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                <input *ngIf=\"field.dataType =='time'\" class=\"fsmall sb-textbox text-uppercase py-8 px-16\" formControlName=\"field.code\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n            </div>\n        </div>\n        <input type=\"submit\" value=\"save\"/>\n    </form> -->\n    <form class=\"ui form\" [formGroup]=\"customFields\">\n        <div class=\"form-group\">\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'startdatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"startDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"startTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'enddatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"endDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"endTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\" min={{startTime}}>\n                    </div>\n                </div>\n            </div>\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationStartDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationStartDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationEndDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationEndDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n\n                     \n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <lib-collection-icon *ngIf=\"showAppIcon\" [appIcon]=\"appIcon\" [appIconConfig]=\"appIconConfig\" (iconEmitter)=\"appIconDataHandler($event)\"></lib-collection-icon>\n\n    <div class=\"d-flex my-24 flex-jc-flex-end\">\n        <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-md ripple\" (click)=\"cancel();\">{{'cancel' | translate}}</button>\n\n        <button type=\"button\" class=\"sb-btn sb-btn-success sb-btn-md ripple ml-12\" (click)=\"postData(true);\">{{'saveToPublish' | translate}}</button>\n        <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-md ripple ml-12\" (click)=\"postData(false);\">{{'saveAsDraft' | translate}}</button>\n\n    </div>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:1.5rem;column-gap:1.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.two-column-grid.formSection:first-child .sb-g-col-lg-1:first-child .sb-input{margin:0}.two-column-grid.formSection:first-child .sb-g-col-lg-1:nth-child(2n) .sb-textarea-container{margin:0!important}.formSection{padding:1.5rem 0}.formSection:first-child{padding:0 0 1.5rem}.multi-select-section-app label{margin-bottom:.3rem!important}.list-border{height:2.8rem!important}.list-border ul{padding:0!important}.list-border ul span{font-weight:500!important;font-size:.785rem}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important}.sb-modal-dropdown-web ul{color:#333;border-bottom:solid 1px var(--gray-100);padding:0;margin:0!important;opacity:1!important;font-size:12px!important;font-weight:500;border:2px solid #eeeeef}.sb-keywordbox{border:1px solid rgba(34,36,38,.15)!important;padding:0!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500}.sb-keywordbox .ng2-tag-input{padding:0}.sb-keywordbox .ng2-tag-input tag{margin-left:.5rem}.sb-keywordbox .ng2-tags-container{margin-top:.2rem}.sb-keywordbox .tag-wrapper,.sb-keywordbox delete-icon svg{height:24px!important;line-height:24px}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.multi-select-container .list-border ul{font-size:12px!important;color:#333;padding:0;margin:0!important;opacity:1!important;font-weight:500!important}.sb-dropdown label{padding:0!important}.sb-textarea-container .sb-textarea{padding-top:.5rem!important}.sb-textarea-container label{padding:0!important}.sb-checkbox{padding:1.5rem 0;margin-top:3.2rem}textarea-container .sb-textarea{height:2.9rem;padding-top:.5rem!important}textarea-container label{padding:0!important}sb-icon-dropdown{top:10px!important;right:6px!important}.sb-dropdown,.sb-textarea-container{margin:1rem 0!important}.dynamic-form .sb-search-input::-webkit-input-placeholder{padding-left:1.4rem!important}.dynamic-form .required label:after{content:\"*\";margin:-.2em 0 0 .2em;color:#db2828}.search-container{margin-left:1rem}.w-85{width:85%;max-width:85%}.w-96{width:96%;max-width:96%}.required{color:red}.ui.modal{display:block!important;max-width:45rem}"]
                    }] }
        ];
        /** @nocollapse */
        EventCreateComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute },
            { type: EventCreateService },
            { type: EventDetailService },
            { type: router.Router },
            { type: common.Location },
            { type: SbToastService },
            { type: forms.FormBuilder },
            { type: TimezoneCal },
            { type: core$1.TranslateService },
            { type: UserConfigService },
            { type: ImageSearchService }
        ]; };
        EventCreateComponent.propDecorators = {
            formFieldProperties: [{ type: core.Input }],
            userId: [{ type: core.Input }],
            closeSaveForm: [{ type: core.Output }],
            navAfterSave: [{ type: core.Output }]
        };
        return EventCreateComponent;
    }());
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
    var EventService = /** @class */ (function () {
        function EventService(userConfigService, dataService) {
            this.userConfigService = userConfigService;
            this.dataService = dataService;
            this.isEnroll = false;
        }
        /**
         * To user enrolled event list
         */
        /**
         * To user enrolled event list
         * @param {?} courseId
         * @param {?} userId
         * @return {?}
         */
        EventService.prototype.getEnrollEvents = /**
         * To user enrolled event list
         * @param {?} courseId
         * @param {?} userId
         * @return {?}
         */
        function (courseId, userId) {
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().enrollListApi
            };
            return this.dataService.get(req);
        };
        /**
         * For Enroll/Unenroll to the event
         */
        /**
         * For Enroll/Unenroll to the event
         * @param {?} action
         * @param {?} cId
         * @param {?} uId
         * @return {?}
         */
        EventService.prototype.enrollToEventPost = /**
         * For Enroll/Unenroll to the event
         * @param {?} action
         * @param {?} cId
         * @param {?} uId
         * @return {?}
         */
        function (action, cId, uId) {
            /** @type {?} */
            var requestBody = {
                request: {
                    "courseId": cId,
                    "userId": uId,
                    "fixedBatchId": "event_batch_id"
                }
            };
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().enrollApi,
                data: requestBody
            };
            return this.dataService.post(req).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log("Result = ", data);
            }));
        };
        EventService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: DataService }
        ]; };
        /** @nocollapse */ EventService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(core.ɵɵinject(UserConfigService), core.ɵɵinject(DataService)); }, token: EventService, providedIn: "root" });
        return EventService;
    }());
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
    var JoinEventComponent = /** @class */ (function () {
        function JoinEventComponent(eventService, timezoneCal) {
            this.eventService = eventService;
            this.timezoneCal = timezoneCal;
            this.canUnenroll = true;
            this.isUserAbleToJoin = false;
            this.isEnrolled = false;
        }
        /**
         * @return {?}
         */
        JoinEventComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isEnrollEvent();
            }), 1000);
            setInterval((/**
             * @return {?}
             */
            function () {
                _this.joinEvent();
            }), 1000);
        };
        /**
         * For validate and show/hide join button
         */
        /**
         * For validate and show/hide join button
         * @return {?}
         */
        JoinEventComponent.prototype.joinEvent = /**
         * For validate and show/hide join button
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var todayDateTime, startEventTime, startDifference, startInMinutes, endEventTime, endDifference, endInMinutes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.today = new Date();
                            this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
                            this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();
                            todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
                            return [4 /*yield*/, this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)];
                        case 1:
                            startEventTime = _a.sent();
                            startDifference = startEventTime.getTime() - todayDateTime.getTime();
                            startInMinutes = Math.round(startDifference / 60000);
                            endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);
                            endDifference = todayDateTime.getTime() - endEventTime.getTime();
                            endInMinutes = Math.round(endDifference / 60000);
                            this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
          * For check user is enrolled or not
          * @param courseId Event id
          * @param userId Log-in user Id
          */
        /**
         * For check user is enrolled or not
         * @return {?}
         */
        JoinEventComponent.prototype.isEnrollEvent = /**
         * For check user is enrolled or not
         * @return {?}
         */
        function () {
            var _this = this;
            this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.items = data.result.courses;
                _this.items.find((/**
                 * @param {?} o
                 * @param {?} i
                 * @return {?}
                 */
                function (o, i) {
                    if (o.courseId === _this.eventDetailItem.identifier) {
                        _this.isEnrolled = true;
                    }
                }));
            }));
        };
        /**
       * Enroll/Unenroll event
       *
       * @param action enroll/unenroll
       */
        /**
         * Enroll/Unenroll event
         *
         * @param {?} action enroll/unenroll
         * @return {?}
         */
        JoinEventComponent.prototype.enrollToEvent = /**
         * Enroll/Unenroll event
         *
         * @param {?} action enroll/unenroll
         * @return {?}
         */
        function (action) {
            this.eventService.enrollToEventPost(action, this.eventDetailItem.code, this.userData);
        };
        /**
         * For join attain event
         *
         * @param joinLink event join url
         */
        /**
         * For join attain event
         *
         * @param {?} joinLink event join url
         * @return {?}
         */
        JoinEventComponent.prototype.openProviderLink = /**
         * For join attain event
         *
         * @param {?} joinLink event join url
         * @return {?}
         */
        function (joinLink) {
            window.open(joinLink, "_blank");
        };
        JoinEventComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-join-event-button',
                        template: "<div class=\"d-flex mt-20\">\n    <div class=\"wl-30\"></div>\n    \n    <div  class=\"w-50 d-flex  join-btn my-12\">\n        <button *ngIf=\"isUserAbleToJoin && isEnrolled\" type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary w-50 sb-btn-normal mr-12 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n        <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn w-50 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n        <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"w-50 sb-btn sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n    </div>\n\n\n    <!-- <table>\n        <tr>\n            <td>\n                <button type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary  sb-btn-normal w-100  mt-20 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n\n            </td>\n            <td *ngIf=\"canUnenroll\">\n                <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary  w-100 sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n                <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"sb-btn w-100 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n            </td>\n        </tr>\n    </table> -->\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        JoinEventComponent.ctorParameters = function () { return [
            { type: EventService },
            { type: TimezoneCal }
        ]; };
        JoinEventComponent.propDecorators = {
            eventDetailItem: [{ type: core.Input }],
            userData: [{ type: core.Input }],
            canUnenroll: [{ type: core.Input }]
        };
        return JoinEventComponent;
    }());
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
    var AdvanceEventDetailComponent = /** @class */ (function () {
        function AdvanceEventDetailComponent(translate, timezoneCal) {
            this.translate = translate;
            this.timezoneCal = timezoneCal;
            this.labelMessages = labelMessages;
            this.isTruncate = false;
            this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
        }
        /**
         * @return {?}
         */
        AdvanceEventDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} truncate
         * @return {?}
         */
        AdvanceEventDetailComponent.prototype.truncateData = /**
         * @param {?} truncate
         * @return {?}
         */
        function (truncate) {
            this.isTruncate = truncate;
        };
        /**
         * @param {?} lang
         * @return {?}
         */
        AdvanceEventDetailComponent.prototype.switchLang = /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            this.translate.use(lang);
        };
        AdvanceEventDetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-advance-event-detail',
                        template: "<div class=\"\">\n    <div>\n        <p *ngIf=\"!isTruncate\"> {{eventDetailItem?.description | slice:0:300}} <a\n                *ngIf=\"eventDetailItem?.description.length > 300\" (click)=\"truncateData(true)\">{{'SeeMore' | translate}}\n\n            </a> </p>\n        <p *ngIf=\"isTruncate\">{{eventDetailItem?.description}} <a (click)=\"truncateData(false)\">{{'LessMore' |\n                translate}}</a> </p>\n        \n\n        <div>\n            <table class=\"w-100 fs-0-92\" *ngIf=\"eventDetailItem?.eventType != 'Online'\">\n                <tr *ngIf=\"eventDetailItem?.venue\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'venue' | translate}} </span>\n                    </td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.venue.name}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationStartDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationStartDate' | translate}} </span></td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.registrationStartDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationEndDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationEndDate' | translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"mr-12\">{{eventDetailItem?.registrationEndDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n            </table>\n\n            <table class=\"w-100\" *ngIf=\"eventDetailItem?.eventType != 'Offline'\">\n                <tr *ngIf=\"eventDetailItem?.onlineProvider\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'onlineproviderdata' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"> {{\n                            eventDetailItem?.onlineProvider}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.code\">\n                    <td class=\"w-17-5\"> <span *ngIf=\"eventDetailItem?.code\" class=\"fs-0-92 font-weight-bold\"> {{'code' |\n                            translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.code}}</span></td>\n                </tr>\n\n\n            </table>\n\n            <table class=\"w-100\">\n                <tr *ngIf=\"eventDetailItem?.language\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'language' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.language}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.keyword\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'keyword' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.keyword}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.createdFor\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'createdFor' | translate}}\n                        </span> </td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.createdFor}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.source\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'source' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.source}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.audience\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold w-90\"> {{'audience' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.audience[0]}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.collaborators\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'collaborators' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"\n                            *ngFor=\"let collaborator of eventDetailItem?.collaborators;let i = index\"> {{i + 1}}.\n                            {{collaborator.name}}</span></td>\n                </tr>\n\n\n            </table>\n\n\n        </div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AdvanceEventDetailComponent.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: TimezoneCal }
        ]; };
        AdvanceEventDetailComponent.propDecorators = {
            eventDetailItem: [{ type: core.Input }]
        };
        return AdvanceEventDetailComponent;
    }());
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
    var CoverEventDetailComponent = /** @class */ (function () {
        function CoverEventDetailComponent(router, eventService, timezoneCal, dataService, translate) {
            this.router = router;
            this.eventService = eventService;
            this.timezoneCal = timezoneCal;
            this.dataService = dataService;
            this.translate = translate;
            this.isOwner = true;
            this.labelMessages = labelMessages;
            this.isEnrolled = false;
            this.retireEventId = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        CoverEventDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataService.get({url : 'https://jsonplaceholder.typicode.com/todos/1'}).subscribe(response => 
            //   {
            //     console.log({response});
            //   });
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isOwner = (_this.eventDetailItem.owner == _this.userData) ? true : false;
                _this.timezoneshort = _this.timezoneCal.timeZoneAbbreviated();
                _this.setDateTimeOnCover();
            }), 1000);
        };
        /**
         * for show Date Time as per timezone
         */
        /**
         * for show Date Time as per timezone
         * @return {?}
         */
        CoverEventDetailComponent.prototype.setDateTimeOnCover = /**
         * for show Date Time as per timezone
         * @return {?}
         */
        function () {
            this.eStart = (this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)).toLocaleString();
            this.eEnd = (this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime)).toLocaleString();
        };
        /**
         * @param {?} identifier
         * @param {?} versionKey
         * @return {?}
         */
        CoverEventDetailComponent.prototype.upate = /**
         * @param {?} identifier
         * @param {?} versionKey
         * @return {?}
         */
        function (identifier, versionKey) {
            this.router.navigate(['/event-post'], {
                queryParams: {
                    identifier: identifier,
                    versionKey: versionKey
                }
            });
        };
        /**
         * @param {?} identifier
         * @return {?}
         */
        CoverEventDetailComponent.prototype.retireEvent = /**
         * @param {?} identifier
         * @return {?}
         */
        function (identifier) {
            this.retireEventId.emit(identifier);
        };
        CoverEventDetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-cover-event-detail',
                        template: "<div>\n    <div class=\"d-flex sb-bg-color-gray-0 w-100\">\n        <img class=\"w-30 coverImg\" *ngIf=\"eventDetailItem?.posterImage\" src=\"{{eventDetailItem?.posterImage}}\" />\n        <img class=\"w-30 coverImg\" *ngIf=\"!eventDetailItem?.posterImage\" src=\"./assets/images/eventcover.jpg\" />\n\n\n        <div class=\"ml-20\">\n            <h2 class=\"fs-1.3\">{{eventDetailItem?.name}}</h2>\n            <!-- <span>{{'by' | translate}} {{eventDetailItem?.owner}}</span> -->\n\n            <div class=\"mt-12\" *ngIf=\"eStart\">\n                <div>\n                    <i class=\"fa fa-calendar fs-1\"></i> <span class=\"fs-0-92\"> &nbsp; {{eStart}} - {{eEnd}} ({{timezoneshort}})</span>\n                </div>\n\n                <div *ngIf=\"isOwner\">\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-normal ripple mt-20 mr-12 w-30\" (click)=\"upate(eventDetailItem?.identifier, eventDetailItem?.versionKey);\">{{'edit' | translate}}</button>\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-error sb-btn-normal ripple mt-10 mr-12 w-30\" (click)=\"retireEvent(eventDetailItem?.identifier);\">{{'retire' | translate}}</button>\n\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 mr-12\" (click)=\"upate(eventDetailItem.identifier);\">{{'edit' | translate}}</button> -->\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal  mt-10 mr-12\" (click)=\"retireEvent(eventDetailItem.identifier);\">{{'retire' | translate}}</button> -->\n                    <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n                    <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n\n                </div>\n            </div>\n            <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n            <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Online'\" class=\"sb-label-status sb-label-status-success ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Offline'\" class=\"sb-label-status sb-label-status-error ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-error\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'OnlineAndOffline'\" class=\"sb-label-status sb-label-primary-100 ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-primary\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n\n    </div>\n</div>",
                        styles: [".coverImg{-o-object-fit:cover;object-fit:cover}"]
                    }] }
        ];
        /** @nocollapse */
        CoverEventDetailComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: EventService },
            { type: TimezoneCal },
            { type: DataService },
            { type: core$1.TranslateService }
        ]; };
        CoverEventDetailComponent.propDecorators = {
            eventDetailItem: [{ type: core.Input }],
            userData: [{ type: core.Input }],
            retireEventId: [{ type: core.Output }]
        };
        return CoverEventDetailComponent;
    }());
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
    var EventFilterComponent = /** @class */ (function () {
        function EventFilterComponent(translate) {
            this.translate = translate;
            this.filterChangeEvent = new core.EventEmitter();
            this.isFilterShow = false;
            this.filterSelectedValues = [];
        }
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.isFilterShow = this.filterOpenStatus;
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.initializeForm = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.showfilter = /**
         * @return {?}
         */
        function () {
            this.isFilterShow = !this.isFilterShow;
            this.filterChangeEvent.emit({
                action: 'filterStatusChange',
                filterStatus: this.isFilterShow
            });
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.resetFilter = /**
         * @return {?}
         */
        function () {
            this.filterSelectedValues = [];
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.applyFilter = /**
         * @return {?}
         */
        function () {
            this.emitApplyFilter();
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.emitApplyFilter = /**
         * @return {?}
         */
        function () {
            this.filterChangeEvent.emit({
                action: 'filterDataChange',
                filter: this.filterValues,
                filtersSelected: this.filterSelectedValues,
                query: this.searchQuery
            });
            console.log('event', this.filterSelectedValues);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        EventFilterComponent.prototype.outputData = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) { };
        /**
         * @param {?} $event
         * @return {?}
         */
        EventFilterComponent.prototype.onStatusChanges = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) { };
        /**
         * @param {?} $event
         * @return {?}
         */
        EventFilterComponent.prototype.valueChanges = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.filterSelectedValues = $event;
        };
        /**
         * @return {?}
         */
        EventFilterComponent.prototype.onQueryEnter = /**
         * @return {?}
         */
        function () { };
        EventFilterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sb-event-filter',
                        template: "<div class=\"sb-prominent-filter sb-bg-header-blue\">\n    <div class=\"ui container pt-10 pb-20\">\n        <div class=\"d-flex flex-w-wrap flex-jc-space-between flex-ai-center\">\n            <div class=\"sb-search-box  search-container small no-btn\">\n                <div class=\"input-div relative\">\n                    <i class=\"search icon\"></i>\n                    <input class=\"sb-search-input \" [(ngModel)]=\"searchQuery\" type=\"text\" (keyup.enter)=\"onQueryEnter();\" placeholder=\"Search Event\" />\n                </div>\n                <button class=\"sb-btn sb-btn-normal\">\n            {{'search' | translate}}\n          </button>\n            </div>\n\n            <div class=\"fs-0-785 cursor-pointer\" (click)=\"showfilter()\">\n                {{'changefilters' | translate}}\n                <i *ngIf=\"isFilterShow\" class=\"caret up icon\"></i>\n                <i *ngIf=\"!isFilterShow\" class=\"caret down icon\"></i>\n            </div>\n        </div>\n        <div class=\"library-filter search-container pt-16\" *ngIf=\"isFilterShow\">\n            <hr class=\"mb-20\">\n            <ng-container *ngIf=\"filterConfig\">\n                <sb-dynamic-form [config]=\"filterConfig\" (initialize)=\"outputData($event)\" (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n            </ng-container>\n            <div class=\"d-flex flex-as-center pt-10 sb-btn-cover flex-jc-space-end\">\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-outline-primary ml-5\" (click)=\"resetFilter();\">{{'reset' | translate}}</button>\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-primary ml-15\" (click)=\"applyFilter();\">{{'apply' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:.5rem;column-gap:.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important;height:1rem!important}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.search-container{margin-left:1rem}.sb-search-box .sb-search-input{width:auto!important}"]
                    }] }
        ];
        /** @nocollapse */
        EventFilterComponent.ctorParameters = function () { return [
            { type: core$1.TranslateService }
        ]; };
        EventFilterComponent.propDecorators = {
            filterValues: [{ type: core.Input }],
            filterOpenStatus: [{ type: core.Input }],
            filterChangeEvent: [{ type: core.Output }],
            filterConfig: [{ type: core.Input }]
        };
        return EventFilterComponent;
    }());
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
    var routes = [
        //{ path: '', redirectTo: '/event', pathMatch: 'full' },
        { path: 'events', component: EventListComponent },
        { path: 'event', component: EventDetailComponent },
        { path: 'event-post', component: EventCreateComponent },
        { path: 'event-filter', component: EventFilterComponent }
    ];
    var EventRoutingModule = /** @class */ (function () {
        function EventRoutingModule() {
        }
        EventRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(routes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return EventRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/events/components/collection-icon/collection-icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollectionIconComponent = /** @class */ (function () {
        function CollectionIconComponent() {
            //public showImagePicker : boolean;
            this.showImagePicker = false;
            this.iconEmitter = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        CollectionIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        CollectionIconComponent.prototype.initializeImagePicker = /**
         * @return {?}
         */
        function () {
            if (this.appIconConfig.isAppIconEditable) {
                this.showImagePicker = true;
            }
            else {
                this.showImagePicker = false;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        CollectionIconComponent.prototype.collectionIconHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.iconEmitter.emit(event);
            this.appIcon = event.url;
            this.showImagePicker = false;
        };
        // dismissImageUploadModal() {
        //   this.showImagePicker = true;
        //   this.showImageUploadModal = false;
        // }
        // dismissImageUploadModal() {
        //   this.showImagePicker = true;
        //   this.showImageUploadModal = false;
        // }
        /**
         * @param {?} event
         * @return {?}
         */
        CollectionIconComponent.prototype.handleModalDismiss = 
        // dismissImageUploadModal() {
        //   this.showImagePicker = true;
        //   this.showImageUploadModal = false;
        // }
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.showImagePicker = false;
        };
        CollectionIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-collection-icon',
                        template: "<ng-container>\n    <div (click)=\"showImagePicker = true\"\n     class=\"mb-20 w-15\">\n        <div class=\"app-icon-label\" >Icon label</div>\n        <div *ngIf='!appIcon' class=\"sb-centericon\">\n            <div>\n                <i id=\"icon_appIcon\" name=\"icon_appIcon\" class=\"icon image outline\" ></i>\n            </div>\n            <div class=\"addImageText\">Add Image</div>\n        </div>\n        <img *ngIf=\"appIcon\" \n        class=\"ui image sb-appicon\" \n        src=\"{{appIcon}}\"/>\n    </div>\n    <lib-asset-browser *ngIf=\"showImagePicker\" [showImagePicker]=\"showImagePicker\" (assetBrowserEmitter)=\"collectionIconHandler($event)\" (modalDismissEmitter)=\"handleModalDismiss($event)\"></lib-asset-browser>\n</ng-container>\n",
                        styles: [".sb-appicon{height:110px;width:120px;border:1px solid #ccc;padding:5px}.sb-centericon{height:110px;width:120px;border:1px solid #ccc;padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column}.addImageText{font-size:.8rem!important}.w-15{width:15%;max-width:15%}.app-icon-label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:600}.ui.modal{display:block!important}"]
                    }] }
        ];
        /** @nocollapse */
        CollectionIconComponent.ctorParameters = function () { return []; };
        CollectionIconComponent.propDecorators = {
            iconEmitter: [{ type: core.Output }],
            appIcon: [{ type: core.Input }],
            appIconConfig: [{ type: core.Input }]
        };
        return CollectionIconComponent;
    }());
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
    var config = {
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
    var AssetBrowserComponent = /** @class */ (function () {
        function AssetBrowserComponent(imageSearchService, sbToastService) {
            this.imageSearchService = imageSearchService;
            this.sbToastService = sbToastService;
            this.assetBrowserEmitter = new core.EventEmitter();
            this.modalDismissEmitter = new core.EventEmitter();
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
        AssetBrowserComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.initialFormConfig = lodashEs.get(config, 'uploadIconFormConfig');
            this.formConfig = lodashEs.get(config, 'uploadIconFormConfig');
            //this.getMyImages();
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // if (this.modal && this.modal.deny) {
            //   this.modal.deny();
            // }
        };
        // Function to get new images
        // getmyImages()
        // {
        //  this.imageSearchService.getMyImages().subscribe(data => {
        //   this.myImages = data.result.content;
        //   });
        // }
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
        AssetBrowserComponent.prototype.getMyImages = 
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
        function (offset, query, search) {
            var _this = this;
            this.assetsCount = 0;
            if (!search) {
                this.searchMyInput = '';
            }
            if (offset === 0) {
                this.myAssets.length = 0;
            }
            /** @type {?} */
            var req = {
                filters: {
                    mediaType: ['image'],
                    createdBy: 1001
                },
                offset: offset
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
            function (data) {
                if (data.responseCode == "OK") {
                    _this.myImages = data.result.content;
                    _this.assetsCount = data.result.count;
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log({ err: err });
                _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
            }));
        };
        /**
         * @param {?} offset
         * @param {?=} query
         * @param {?=} search
         * @return {?}
         */
        AssetBrowserComponent.prototype.getAllImages = /**
         * @param {?} offset
         * @param {?=} query
         * @param {?=} search
         * @return {?}
         */
        function (offset, query, search) {
            var _this = this;
            this.assetsCount = 0;
            if (!search) {
                this.searchAllInput = '';
            }
            if (offset === 0) {
                this.allImages.length = 0;
            }
            /** @type {?} */
            var req = {
                filters: {
                    mediaType: ['image']
                },
                offset: offset
            };
            if (query) {
                req['query'] = query;
            }
            this.imageSearchService.getMyImages(req).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.responseCode == "OK") {
                    _this.allImages = data.result.content;
                    _this.assetsCount = data.result.count;
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log({ err: err });
                _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
            }));
        };
        /**
         * @param {?} event
         * @param {?} type
         * @return {?}
         */
        AssetBrowserComponent.prototype.searchImages = /**
         * @param {?} event
         * @param {?} type
         * @return {?}
         */
        function (event, type) {
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
        };
        /**
         * @param {?} imageUrl
         * @param {?} imageId
         * @return {?}
         */
        AssetBrowserComponent.prototype.addImageInEditor = /**
         * @param {?} imageUrl
         * @param {?} imageId
         * @return {?}
         */
        function (imageUrl, imageId) {
            //console.log("img=",imageUrl);console.log("id=",imageId)
            this.appIcon = imageUrl;
            this.showImagePicker = false;
            this.assetBrowserEmitter.emit({ type: 'image', url: this.appIcon });
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.dismissImagePicker = /**
         * @return {?}
         */
        function () {
            this.showImagePicker = false;
            this.modalDismissEmitter.emit({});
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.lazyloadMyImages = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var offset = this.myImages.length;
            //this.getmyImages();
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.dismissImageUploadModal = /**
         * @return {?}
         */
        function () {
            this.showImagePicker = true;
            this.showImageUploadModal = false;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AssetBrowserComponent.prototype.uploadImage = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // console.log("EEEEE=",event);
            /** @type {?} */
            var file = event.target.files[0];
            /** @type {?} */
            var reader = new FileReader();
            this.formData = new FormData();
            this.formData.append('file', file);
            this.assetName = file.name;
            /** @type {?} */
            var fileType = file.type;
            /** @type {?} */
            var fileName = file.name.split('.').slice(0, -1).join('.');
            /** @type {?} */
            var fileSize = file.size / 1024 / 1024;
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
        };
        /**
         * @param {?} formData
         * @return {?}
         */
        AssetBrowserComponent.prototype.populateFormData = /**
         * @param {?} formData
         * @return {?}
         */
        function (formData) {
            /** @type {?} */
            var formvalue = lodashEs.cloneDeep(this.formConfig);
            this.formConfig = null;
            lodashEs.forEach(formvalue, (/**
             * @param {?} formFieldCategory
             * @return {?}
             */
            function (formFieldCategory) {
                formFieldCategory.default = formData[formFieldCategory.code];
                formFieldCategory.editable = true;
            }));
            this.formConfig = formvalue;
        };
        /**
         * @param {?} fileName
         * @param {?} fileType
         * @param {?} mediaType
         * @return {?}
         */
        AssetBrowserComponent.prototype.generateAssetCreateRequest = /**
         * @param {?} fileName
         * @param {?} fileType
         * @param {?} mediaType
         * @return {?}
         */
        function (fileName, fileType, mediaType) {
            return {
                name: fileName,
                mediaType: mediaType,
                mimeType: fileType,
                createdBy: 1001,
                creator: "Ankita Chavan",
                // Mock Info
                channel: "01309282781705830427" //this is node ID
            };
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.resetFormData = /**
         * @return {?}
         */
        function () {
            this.imageUploadLoader = false;
            this.imageFormValid = false;
            this.formConfig = this.initialFormConfig;
        };
        /**
         * @return {?}
         */
        AssetBrowserComponent.prototype.openImageUploadModal = /**
         * @return {?}
         */
        function () {
            this.showImageUploadModal = true;
            this.formData = null;
            this.formConfig = this.initialFormConfig;
            this.imageUploadLoader = false;
            this.imageFormValid = false;
            this.showErrorMsg = false;
        };
        /**
         * @param {?} modal
         * @return {?}
         */
        AssetBrowserComponent.prototype.uploadAndUseImage = /**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
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
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AssetBrowserComponent.prototype.onStatusChanges = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AssetBrowserComponent.prototype.valueChanges = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
        };
        /**
         * @param {?} modal
         * @return {?}
         */
        AssetBrowserComponent.prototype.dismissPops = /**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            console.log("Hi close");
            this.dismissImagePicker();
            modal.deny();
        };
        AssetBrowserComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-asset-browser',
                        template: "<!-- <sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">Select Image</div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of allImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal> -->\n \n\n\n\n<sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">\n    Select Image\n  </div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <!-- <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a> -->\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'myImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'myImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search Btn</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search btn</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal>\n\n<sui-modal class=\"sb-modal overflow-modal uploadPopup\" [isClosable]=\"true\" [isInverted]=\"false\"\n  (dismissed)=\"dismissImageUploadModal()\" *ngIf=\"showImageUploadModal\" [size]=\"'large'\" [isFullScreen]=\"false\"\n  [mustScroll]=\"true\" appBodyScroll #modal>\n  <div class=\"sb-modal-header\">Upload And Use</div>\n  <div class=\"p-10 sb-bg-white\">\n    <div class=\"d-flex\">\n      <div class=\"w-50\">\n        <div class=\"content\">\n          <h6 class=\"mb-8 fs-normal\">Choose or drag and drop your image here*<span class=\"red\">*</span></h6>\n          <div class=\"upload-image-modal-section d-flex flex-ai-center flex-jc-center flex-dc\">\n            <ng-container>\n              <button class=\"upload-input-button sb-btn sb-btn-success sb-btn-normal\">Upload from Computer\n                <input (change)=\"uploadImage($event)\" type=\"file\" [accept]=\"acceptImageType\" name=\"assetfile\">\n              </button>\n              <div class=\"py-10 fs-0-785 sb-color-primary\" *ngIf=\"imageUploadLoader\"> {{assetName}} </div>\n              <span class=\"fsmall mt-8\">Upload png, jpeg (Max File size: 1MB)</span>\n              <div *ngIf=\"showErrorMsg\" class=\"sb-color-error fsmall mt-8\">\n                <p>{{errorMsg}}</p>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"ui info message sb-info-bx\">\n            <ul class=\"list\">\n              <li class=\"fs-0785\">Allowed file types are: png, jpeg\n              </li>\n              <li class=\"fs-0785\">Maximum allowed file size: 1MB\n              </li>\n            </ul>\n          </div>\n          <h6 class=\"fs-0785\">Copyright & License*<span class=\"red\">*</span></h6>\n          <p class=\"fsmall mt-8 terms-and-condition\">I understand and confirm that all resources and assets created through the content editor or uploaded on the platform shall be available for free and public use without limitations on the platform (web portal, applications and any other end user interface that the platform would enable) and will be licensed under terms & conditions and policy guidelines of the platform. In doing so, the copyright and license of the original author is not infringed.</p>\n        </div>\n      </div>\n      <div class=\"w-50 pl-10 ml-10 b-bl\">\n        <div class=\"ui info message sb-info-bx mb-0\">\n          <ul class=\"list\">\n            <li class=\"fs-0785 font-weight-bold\">\n              <i class=\"icon info circle\" aria-hidden=\"true\"></i>\n              Drop or choose file to upload before entering the details\n            </li>\n          </ul>\n        </div>\n        <div class=\"sb-form-fields\">\n          <div class=\"form-container upload-form\">\n            <sb-dynamic-form [config]=\"initialFormConfig\"\n              (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sb-modal-actions flex-jc-space-between p-0\">\n      <div>\n        <button (click)=\"dismissPops(modal);\" class=\"mr-10 sb-btn sb-btn-primary sb-btn-normal\">Cancel</button>\n        <button (click)=\"uploadAndUseImage(modal);\" [disabled]=\"!imageFormValid\"\n        [ngClass]=\"{'sb-btn-primary': imageFormValid, 'sb-btn-disabled': !imageFormValid}\"\n        class=\"sb-btn  sb-btn-normal text-left\">Upload And Use</button>\n      </div>\n      <div>\n        <button (click)=\"dismissImageUploadModal();\" class=\" sb-btn sb-btn-primary sb-btn-normal\">Back</button>\n      </div>\n    </div>\n  </div>\n</sui-modal>",
                        styles: [".editorWrapper{border:0 solid #fff}.editorWrapper.hasError{border:0 solid red}.characterCount{text-align:right;border-top:0;padding-right:7px;font-size:11px;font-weight:700;margin-top:-16px;position:relative}.custom-image img{border:1px dotted;padding:7px;margin:6px;cursor:pointer}.resource-image{height:180px!important}.asset_container{overflow-y:auto;overflow-x:hidden;min-height:300px!important;max-height:300px!important;padding:5px}.insert-image-btn{position:absolute;z-index:1;left:315px;background-color:transparent;padding:12px 14px!important;margin-left:6px}.insert-image-btn>.icon{opacity:1}.insert-image-btn:active{background-color:transparent}.upload-file-description p{color:#999}.upload-file-description ul{margin:0;list-style:disc}.upload-file-description ul li{margin-bottom:8px}.upload-file-description ul li a{cursor:pointer;font-size:12px}.sb-grid-layout{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));grid-gap:16px}.sb-grid-layout.image{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}.sb-grid-layout.video{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.sb-grid-layout .sb-video-content .sb-image-section{height:96px;overflow:hidden;border-radius:4px;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.5)}.sb-grid-layout .sb-video-content .sb-image-section img{width:100%;height:100%;cursor:pointer}.overlay-image{width:100%;height:100%;background:rgba(0,0,0,.3);position:absolute;left:0;right:0;cursor:pointer}.overlay-image .play.icon{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;color:rgba(255,255,255,.6);font-size:32px;cursor:pointer}.upload-image-modal-section{border-radius:4px;width:100%;min-height:140px;background:#f5f9fc;border:1px dashed #024f9d}.upload-file-section{display:flex;height:240px;width:100%;max-width:800px;align-items:center;justify-content:center;flex-direction:column;margin:0 auto;background-color:#f5f9fc;border:1px dashed #80a7ce}.qq-uploader.qq-uploader-selector.custom-qq-uploader{background:inherit;border:none;max-height:inherit;min-height:inherit;overflow-y:inherit;width:688px;height:240px;display:flex;justify-content:center;align-items:center}.terms-and-condition{line-height:14px}.red{color:red}.b-bl{border-left:1px solid #e4e1e1}.sb-color-grey{color:#666}.flex-jc-space-end{justify-content:flex-end!important}.fs-0785{font-size:.785rem!important}.ui.info.message{color:#276f86!important}.sb-textbox[disabled=true]{opacity:.3!important;font-weight:500!important}.sb-tabset-segment{min-height:288px;max-height:288px;overflow-y:auto}input:focus-visible{border:none!important}"]
                    }] }
        ];
        /** @nocollapse */
        AssetBrowserComponent.ctorParameters = function () { return [
            { type: ImageSearchService },
            { type: SbToastService }
        ]; };
        AssetBrowserComponent.propDecorators = {
            showImagePicker: [{ type: core.Input }],
            assetBrowserEmitter: [{ type: core.Output }],
            modalDismissEmitter: [{ type: core.Output }]
        };
        return AssetBrowserComponent;
    }());
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
    var EventsModule = /** @class */ (function () {
        function EventsModule() {
        }
        EventsModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            commonFormElements.CommonFormElementsModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            EventRoutingModule,
                            ngxIzitoast.NgxIziToastModule,
                            http.HttpClientModule,
                            ngxPagination.NgxPaginationModule,
                            dist.SuiModule,
                            ngxInfiniteScroll.InfiniteScrollModule,
                            core$1.TranslateModule.forRoot({
                                loader: {
                                    provide: core$1.TranslateLoader,
                                    useFactory: httpTranslateLoader,
                                    deps: [http.HttpClient]
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
        return EventsModule;
    }());
    // AOT compilation support
    /**
     * @param {?} http
     * @return {?}
     */
    function httpTranslateLoader(http) {
        return new httpLoader.TranslateHttpLoader(http);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/events/services/event-list/event-list.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EventListService = /** @class */ (function () {
        function EventListService(userConfigService, dataService) {
            this.userConfigService = userConfigService;
            this.dataService = dataService;
        }
        /**
         * For get event list
         */
        /**
         * For get event list
         * @return {?}
         */
        EventListService.prototype.getEventList = /**
         * For get event list
         * @return {?}
         */
        function () {
            /** @type {?} */
            var req = {
                url: this.userConfigService.getConfigUrl().list
            };
            return this.dataService.get(req);
        };
        /**
         * @return {?}
         */
        EventListService.prototype.getEventFilters = /**
         * @return {?}
         */
        function () {
            // return this.http.get<any>('assets/eventFilter.json');
        };
        EventListService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventListService.ctorParameters = function () { return [
            { type: UserConfigService },
            { type: DataService }
        ]; };
        /** @nocollapse */ EventListService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function EventListService_Factory() { return new EventListService(core.ɵɵinject(UserConfigService), core.ɵɵinject(DataService)); }, token: EventListService, providedIn: "root" });
        return EventListService;
    }());
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
    var EventLibraryModule = /** @class */ (function () {
        function EventLibraryModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        EventLibraryModule.forChild = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
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
        };
        EventLibraryModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EventLibraryComponent],
                        imports: [
                            EventsModule,
                            http.HttpClientModule,
                            animations.BrowserAnimationsModule,
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
        return EventLibraryModule;
    }());

    exports.DataService = DataService;
    exports.EventCreateComponent = EventCreateComponent;
    exports.EventCreateService = EventCreateService;
    exports.EventDetailComponent = EventDetailComponent;
    exports.EventDetailService = EventDetailService;
    exports.EventLibraryComponent = EventLibraryComponent;
    exports.EventLibraryModule = EventLibraryModule;
    exports.EventLibraryService = EventLibraryService;
    exports.EventListComponent = EventListComponent;
    exports.EventListService = EventListService;
    exports.EventService = EventService;
    exports.SbToastService = SbToastService;
    exports.TimezoneCal = TimezoneCal;
    exports.UserConfigService = UserConfigService;
    exports.ɵa = EventsModule;
    exports.ɵb = httpTranslateLoader;
    exports.ɵc = ImageSearchService;
    exports.ɵd = JoinEventComponent;
    exports.ɵe = AdvanceEventDetailComponent;
    exports.ɵf = CoverEventDetailComponent;
    exports.ɵg = EventFilterComponent;
    exports.ɵh = CollectionIconComponent;
    exports.ɵi = AssetBrowserComponent;
    exports.ɵj = EventRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tekdi-ngtek-event-library.umd.js.map
