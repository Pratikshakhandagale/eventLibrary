/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/interfaces/event-detail.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var IEventDetailInterface;
(function (IEventDetailInterface) {
    /**
     * @record
     */
    function IEventDetail() { }
    IEventDetailInterface.IEventDetail = IEventDetail;
    if (false) {
        /** @type {?} */
        IEventDetail.prototype.id;
        /** @type {?} */
        IEventDetail.prototype.ver;
        /** @type {?} */
        IEventDetail.prototype.ts;
        /** @type {?} */
        IEventDetail.prototype.params;
        /** @type {?} */
        IEventDetail.prototype.responseCode;
        /** @type {?} */
        IEventDetail.prototype.result;
    }
    /**
     * @record
     */
    function IRequestStatus() { }
    IEventDetailInterface.IRequestStatus = IRequestStatus;
    if (false) {
        /** @type {?} */
        IRequestStatus.prototype.resmsgid;
        /** @type {?} */
        IRequestStatus.prototype.msgid;
        /** @type {?} */
        IRequestStatus.prototype.err;
        /** @type {?} */
        IRequestStatus.prototype.status;
        /** @type {?} */
        IRequestStatus.prototype.errmsg;
    }
    /**
     * @record
     */
    function IEventDetailContent() { }
    IEventDetailInterface.IEventDetailContent = IEventDetailContent;
    if (false) {
        /** @type {?} */
        IEventDetailContent.prototype.trackable;
        /** @type {?} */
        IEventDetailContent.prototype.identifier;
        /** @type {?} */
        IEventDetailContent.prototype.lastStatusChangedOn;
        /** @type {?} */
        IEventDetailContent.prototype.audience;
        /** @type {?} */
        IEventDetailContent.prototype.code;
        /** @type {?} */
        IEventDetailContent.prototype.visibility;
        /** @type {?} */
        IEventDetailContent.prototype.endDate;
        /** @type {?} */
        IEventDetailContent.prototype.onlineProvider;
        /** @type {?} */
        IEventDetailContent.prototype.language;
        /** @type {?} */
        IEventDetailContent.prototype.eventType;
        /** @type {?} */
        IEventDetailContent.prototype.languageCode;
        /** @type {?} */
        IEventDetailContent.prototype.createdOn;
        /** @type {?} */
        IEventDetailContent.prototype.version;
        /** @type {?} */
        IEventDetailContent.prototype.objectType;
        /** @type {?} */
        IEventDetailContent.prototype.versionKey;
        /** @type {?} */
        IEventDetailContent.prototype.registrationEndDate;
        /** @type {?} */
        IEventDetailContent.prototype.leafNodesCount;
        /** @type {?} */
        IEventDetailContent.prototype.name;
        /** @type {?} */
        IEventDetailContent.prototype.lastUpdatedOn;
        /** @type {?} */
        IEventDetailContent.prototype.startTime;
        /** @type {?} */
        IEventDetailContent.prototype.endTime;
        /** @type {?} */
        IEventDetailContent.prototype.contentType;
        /** @type {?} */
        IEventDetailContent.prototype.startDate;
        /** @type {?} */
        IEventDetailContent.prototype.status;
    }
})(IEventDetailInterface || (IEventDetailInterface = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9pbnRlcmZhY2VzL2V2ZW50LWRldGFpbC5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQVcscUJBQXFCLENBb0RyQztBQXBERCxXQUFpQixxQkFBcUI7Ozs7SUFFOUIsMkJBU0M7Ozs7UUFSTywwQkFBVzs7UUFDWCwyQkFBWTs7UUFDWiwwQkFBVzs7UUFDWCw4QkFBdUI7O1FBQ3ZCLG9DQUFxQjs7UUFDckIsOEJBRUM7Ozs7O0lBR1QsNkJBTUM7Ozs7UUFMTyxrQ0FBaUI7O1FBQ2pCLCtCQUFjOztRQUNkLDZCQUFZOztRQUNaLGdDQUFlOztRQUNmLGdDQUFjOzs7OztJQUd0QixrQ0E2QkM7Ozs7UUE1Qk8sd0NBSUU7O1FBQ0YseUNBQW1COztRQUNuQixrREFBNEI7O1FBQzVCLHVDQUFhOztRQUNiLG1DQUFhOztRQUNiLHlDQUFtQjs7UUFDbkIsc0NBQWdCOztRQUNoQiw2Q0FBdUI7O1FBQ3ZCLHVDQUFhOztRQUNiLHdDQUFrQjs7UUFDbEIsMkNBQWlCOztRQUNqQix3Q0FBa0I7O1FBQ2xCLHNDQUFnQjs7UUFDaEIseUNBQW1COztRQUNuQix5Q0FBbUI7O1FBQ25CLGtEQUE0Qjs7UUFDNUIsNkNBQXVCOztRQUN2QixtQ0FBYTs7UUFDYiw0Q0FBc0I7O1FBQ3RCLHdDQUFrQjs7UUFDbEIsc0NBQWdCOztRQUNoQiwwQ0FBb0I7O1FBQ3BCLHdDQUFrQjs7UUFDbEIscUNBQWM7O0FBRzlCLENBQUMsRUFwRGdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFvRHJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBJRXZlbnREZXRhaWxJbnRlcmZhY2Uge1xuXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50RGV0YWlsIHtcbiAgICAgICAgICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHZlcjogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHRzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBJUmVxdWVzdFN0YXR1cyxcbiAgICAgICAgICAgICAgICByZXNwb25zZUNvZGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IElFdmVudERldGFpbENvbnRlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0U3RhdHVzIHtcbiAgICAgICAgICAgICAgICByZXNtc2dpZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIG1zZ2lkOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZXJyOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgZXJybXNnOiBzdHJpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50RGV0YWlsQ29udGVudCB7XG4gICAgICAgICAgICAgICAgdHJhY2thYmxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEJhdGNoOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEJhdGNoSWQ6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGxhc3RTdGF0dXNDaGFuZ2VkT246IHN0cmluZyxcbiAgICAgICAgICAgICAgICBhdWRpZW5jZTogW10sXG4gICAgICAgICAgICAgICAgY29kZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgb25saW5lUHJvdmlkZXI6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogW10sXG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VDb2RlOiBbXSxcbiAgICAgICAgICAgICAgICBjcmVhdGVkT246IHN0cmluZyxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHZlcnNpb25LZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25FbmREYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgbGVhZk5vZGVzQ291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWRPbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGVuZFRpbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHN0YXR1czogc3RyaW5nXG4gICAgICAgIH1cblxufVxuIl19