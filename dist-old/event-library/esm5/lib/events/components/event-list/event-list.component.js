/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-list/event-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
var EventListComponent = /** @class */ (function () {
    function EventListComponent(router, translate) {
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
        { type: Component, args: [{
                    selector: 'sb-event-list',
                    template: "<div class=\" sbt-page-content-area\">\n    <div class=\"card-container\">\n        <div class=\"masonry-grid \" *ngIf=\"list\">\n            <div class=\"masonry-item\"  *ngFor=\"let event of list | paginate: { itemsPerPage: paginateLimit, currentPage: p }\">\n                <!-- <div class=\"sb-card\" (click)=\"onEventWrapper(event?.identifier);navToEventDetail(event)\" tabindex=\"0\"> -->\n\n                <div class=\"sb-card\" (click)=\"navToEventDetail(event)\" tabindex=\"0\">\n                    <div class=\"sb-card-body\">\n                        <div class=\"sb-card-metas\">\n                            <div class=\"sb-card-image mr-16\">\n                                <img src=\"./assets/images/eventcover.jpg\">\n                            </div>\n                            <div class=\"sb-card-meta course\">\n                                <div *ngIf=\"event?.audience\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'audience' | translate}}: {{event?.audience}}\n                                </div>\n                                <div *ngIf=\"event?.onlineProvider\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'eventtype' | translate}}: {{event?.onlineProvider}}\n                                </div>\n                                <div *ngIf=\"event?.status\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'Status' | translate}}: {{event?.status}}\n                                </div>\n                                <div *ngIf=\"event?.startDate\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'startdate' | translate}}: {{event?.startDate}}\n                                </div>\n                            </div>\n                        </div>\n                        <h4 *ngIf=\"event?.name\" class=\"sb-card-title\">\n                            {{event?.name}}\n                        </h4>\n                        <!-- <div *ngIf=\"event?.status\" class=\"sb-card-org ellipsis \">\n                {{event?.status}} \n              </div> -->\n                        <div class=\"sb-label-status sb-label-status-success ml-auto mr-15 p-10 mt-8\">\n                            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span> {{event?.eventType}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n              <pagination-controls (pageChange)=\"p = $event\"  *ngIf=\"list\"></pagination-controls>        \n    </div>\n</div>",
                    styles: [".card-container{margin:1.5rem}.filter-container{margin:5rem}.sb-card{margin-left:3.5rem;margin-bottom:2rem}a.disabled{color:gray;pointer-events:none;cursor:default}"]
                }] }
    ];
    /** @nocollapse */
    EventListComponent.ctorParameters = function () { return [
        { type: Router },
        { type: TranslateService }
    ]; };
    EventListComponent.propDecorators = {
        list: [{ type: Input }],
        paginateLimit: [{ type: Input }],
        eventDetailData: [{ type: Output }],
        redirectToDetail: [{ type: Output }],
        redirection: [{ type: Input }]
    };
    return EventListComponent;
}());
export { EventListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvY29tcG9uZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBY0UsNEJBQ1UsTUFBYyxFQUNmLFNBQTJCO1FBRDFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVIzQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2QyxnQkFBVyxHQUFRLE9BQU8sQ0FBQztRQUtsQyxpQ0FBaUM7SUFDbkMsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7Ozs7OztJQUVILDZDQUFnQjs7Ozs7Ozs7Ozs7Ozs7SUFBaEIsVUFBaUIsR0FBRztRQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFyQ0osU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0bEZBQTBDOztpQkFFM0M7Ozs7Z0JBUFEsTUFBTTtnQkFDTixnQkFBZ0I7Ozt1QkFTdEIsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLE1BQU07bUNBQ04sTUFBTTs4QkFHTixLQUFLOztJQXlCUix5QkFBQztDQUFBLEFBdENELElBc0NDO1NBakNZLGtCQUFrQjs7O0lBRTdCLGtDQUFtQjs7SUFDbkIsMkNBQW1DOztJQUNuQyw2Q0FBK0M7O0lBQy9DLDhDQUFnRDs7SUFFaEQsK0JBQU87O0lBQ1AseUNBQW9DOzs7OztJQUVsQyxvQ0FBc0I7O0lBQ3RCLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1ldmVudC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsaXN0OiBhbnk7XG4gIEBJbnB1dCgpIHBhZ2luYXRlTGltaXQ6IG51bWJlciA9IDU7XG4gIEBPdXRwdXQoKSBldmVudERldGFpbERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWRpcmVjdFRvRGV0YWlsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHA6IGFueTtcbiAgQElucHV0KCkgcmVkaXJlY3Rpb246IGFueSA9ICdldmVudCc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHtcbiAgICAvL3RyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLypvbkV2ZW50V3JhcHBlcihpZGVudGlmaWVyKSB7XG4gICAgYWxlcnQoJ2hpaWkyJyk7XG4gICAgXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmVkaXJlY3Rpb25dLCB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB2aWV3OiAnZGV0YWlsJ1xuICAgICAgfVxuICAgIH0pO1xuICB9Ki9cblxuICBuYXZUb0V2ZW50RGV0YWlsKHJlcyl7XG4gICAgICB0aGlzLmV2ZW50RGV0YWlsRGF0YS5lbWl0KHJlcyk7XG4gICAgfVxufVxuIl19