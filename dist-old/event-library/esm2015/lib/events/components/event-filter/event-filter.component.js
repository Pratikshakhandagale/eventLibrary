/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-filter/event-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export class EventFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWZpbHRlci9ldmVudC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF2RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBYS9CLFlBQ1MsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFWMUIsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJN0QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJckIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO0lBSS9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNILFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsY0FBYyxLQUFLLENBQUM7Ozs7SUFFcEIsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDMUIsTUFBTSxFQUFFLG9CQUFvQjtZQUM1QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMxQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7Ozs7O0lBRXRCLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQzs7Ozs7SUFFM0IsWUFBWSxDQUFDLE1BQU07UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixHQUFJLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ0QsWUFBWSxLQUFHLENBQUM7OztZQWpFakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG8wREFBNEM7Z0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBRLGdCQUFnQjs7OzJCQVV0QixLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsTUFBTTsyQkFHTixLQUFLOzs7O0lBTE4sNENBQTJCOztJQUMzQixnREFBbUM7O0lBQ25DLGlEQUFvRTs7SUFFcEUsc0RBQW1DOztJQUNuQyw0Q0FBMkI7O0lBQzNCLDRDQUE0Qjs7SUFDNUIsNENBQXlCOztJQUN6Qiw4Q0FBMkI7O0lBQzNCLDJDQUEyQjs7SUFDM0Isb0RBQWlDOztJQUUvQix5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWV2ZW50LWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldmVudC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBmaWx0ZXJWYWx1ZXM6IGFueTtcbiAgQElucHV0KCkgZmlsdGVyT3BlblN0YXR1czogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc2VhcmNoRmlsdGVyRm9ybUNvbmZpZzogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IGFueTtcbiAgcHVibGljIGlzRmlsdGVyU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgZmlsdGVyRmllbGRzOiBhbnk7XG4gIHB1YmxpYyBjdXJyZW50RmlsdGVyczogYW55O1xuICBwdWJsaWMgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgcHVibGljIGZpbHRlclNlbGVjdGVkVmFsdWVzID0gW107XG4gIGNvbnN0cnVjdG9yKCAgICAgXG4gICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICAgICkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgIHRoaXMuaXNGaWx0ZXJTaG93ID0gdGhpcy5maWx0ZXJPcGVuU3RhdHVzO1xuICAgIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7IFxuICB9XG5cbiAgaW5pdGlhbGl6ZUZvcm0oKSB7IH1cblxuICBzaG93ZmlsdGVyKCkge1xuICAgIHRoaXMuaXNGaWx0ZXJTaG93ID0gIXRoaXMuaXNGaWx0ZXJTaG93O1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlRXZlbnQuZW1pdCh7XG4gICAgICBhY3Rpb246ICdmaWx0ZXJTdGF0dXNDaGFuZ2UnLFxuICAgICAgZmlsdGVyU3RhdHVzOiB0aGlzLmlzRmlsdGVyU2hvd1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlcyA9W107XG4gIH1cblxuICBhcHBseUZpbHRlcigpIHtcbiAgICB0aGlzLmVtaXRBcHBseUZpbHRlcigpO1xuICB9XG5cbiAgZW1pdEFwcGx5RmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlRXZlbnQuZW1pdCh7XG4gICAgICBhY3Rpb246ICdmaWx0ZXJEYXRhQ2hhbmdlJyxcbiAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJWYWx1ZXMsXG4gICAgICBmaWx0ZXJzU2VsZWN0ZWQ6IHRoaXMuZmlsdGVyU2VsZWN0ZWRWYWx1ZXMsXG4gICAgICBxdWVyeTogdGhpcy5zZWFyY2hRdWVyeVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdldmVudCcsIHRoaXMuZmlsdGVyU2VsZWN0ZWRWYWx1ZXMpO1xuICB9XG5cbiAgb3V0cHV0RGF0YSgkZXZlbnQpIHsgfVxuXG4gIG9uU3RhdHVzQ2hhbmdlcygkZXZlbnQpIHsgfVxuXG4gIHZhbHVlQ2hhbmdlcygkZXZlbnQpIHtcbiAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRWYWx1ZXMgID0gJGV2ZW50O1xuICB9XG4gIG9uUXVlcnlFbnRlcigpe31cbn1cbiJdfQ==