/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EventCreateService } from '../../services/event-create/event-create.service';
import { EventDetailService } from '../../services/event-detail/event-detail.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { TranslateService } from '@ngx-translate/core';
import { UserConfigService } from '../../services/userConfig/user-config.service';
import { ImageSearchService } from '../../services/image-search/image-search.service';
import * as _ from 'lodash-es';
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
            this.appIconConfig = tslib_1.__assign({}, this.appIconConfig, { isAppIconEditable: false });
        }
        else {
            this.appIconConfig = tslib_1.__assign({}, this.appIconConfig, { isAppIconEditable: true });
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
        return _.includes(['review', 'read', 'sourcingreview'], this.editmode);
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
        { type: Component, args: [{
                    selector: 'sb-event-create',
                    template: "<div class=\"p-40\">\n\n    <h1 class=\"mt-20 mb-20\">{{'createnewevent' | translate}}</h1>\n    <ng-container *ngIf=\"isNew;then New; else Edit\">\n    </ng-container>\n    <ng-template #New>\n        <sb-dynamic-form *ngIf=\"formFieldProperties\" class=\"label-1\" [config]=\"formFieldProperties\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n    <ng-template #Edit>\n        <sb-dynamic-form *ngIf=\"formFieldData\" class=\"label-1\" [config]=\"formFieldData\" (valueChanges)=\"valueChanges($event)\">\n        </sb-dynamic-form>\n    </ng-template>\n\n    <!-- <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"onSubmit()\">\n        <div *ngFor=\"let field of customFieldsForm\" class=\"d-flex flex-jc-space-between\">\n            <div class=\"mb-12 w-100\">\n                <div class=\"mb-5 fs-0-785\">{{field.code}}</div>\n                \n                <input *ngIf=\"field.dataType == 'text'\" class=\"fsmall sb-textbox text-uppercase py-8 w-85 px-16\" formControlName=\"field.code\" type=\"text\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                <input *ngIf=\"field.dataType =='time'\" class=\"fsmall sb-textbox text-uppercase py-8 px-16\" formControlName=\"field.code\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n            </div>\n        </div>\n        <input type=\"submit\" value=\"save\"/>\n    </form> -->\n    <form class=\"ui form\" [formGroup]=\"customFields\">\n        <div class=\"form-group\">\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'startdatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"startDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"startTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\">\n\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'enddatetime' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-75 px-16\" formControlName=\"endDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 px-16 w-17-5\" formControlName=\"endTime\" type=\"time\" id=\"meeting-time\" name=\"meeting-time\" min={{startTime}}>\n                    </div>\n                </div>\n            </div>\n            <div class=\"d-flex flex-jc-space-between\">\n                <div class=\"mb-12 w-100\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationStartDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationStartDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n                    </div>\n                </div>\n                <div class=\"mb-12 w-100 ml-16\">\n                    <label class=\"mb-5 fs-0-785\">{{'registrationEndDate' | translate}} ({{timezoneshort}})\n                    </label>\n                    <div class=\"field\">\n                        <input class=\"fsmall sb-textbox text-uppercase py-8 w-96 px-16\" formControlName=\"registrationEndDate\" type=\"date\" id=\"meeting-time\" name=\"meeting-time\" min=\"{{todayDate}}\">\n\n                     \n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <lib-collection-icon *ngIf=\"showAppIcon\" [appIcon]=\"appIcon\" [appIconConfig]=\"appIconConfig\" (iconEmitter)=\"appIconDataHandler($event)\"></lib-collection-icon>\n\n    <div class=\"d-flex my-24 flex-jc-flex-end\">\n        <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-md ripple\" (click)=\"cancel();\">{{'cancel' | translate}}</button>\n\n        <button type=\"button\" class=\"sb-btn sb-btn-success sb-btn-md ripple ml-12\" (click)=\"postData(true);\">{{'saveToPublish' | translate}}</button>\n        <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-md ripple ml-12\" (click)=\"postData(false);\">{{'saveAsDraft' | translate}}</button>\n\n    </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:1.5rem;column-gap:1.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.two-column-grid.formSection:first-child .sb-g-col-lg-1:first-child .sb-input{margin:0}.two-column-grid.formSection:first-child .sb-g-col-lg-1:nth-child(2n) .sb-textarea-container{margin:0!important}.formSection{padding:1.5rem 0}.formSection:first-child{padding:0 0 1.5rem}.multi-select-section-app label{margin-bottom:.3rem!important}.list-border{height:2.8rem!important}.list-border ul{padding:0!important}.list-border ul span{font-weight:500!important;font-size:.785rem}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important}.sb-modal-dropdown-web ul{color:#333;border-bottom:solid 1px var(--gray-100);padding:0;margin:0!important;opacity:1!important;font-size:12px!important;font-weight:500;border:2px solid #eeeeef}.sb-keywordbox{border:1px solid rgba(34,36,38,.15)!important;padding:0!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500}.sb-keywordbox .ng2-tag-input{padding:0}.sb-keywordbox .ng2-tag-input tag{margin-left:.5rem}.sb-keywordbox .ng2-tags-container{margin-top:.2rem}.sb-keywordbox .tag-wrapper,.sb-keywordbox delete-icon svg{height:24px!important;line-height:24px}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.multi-select-container .list-border ul{font-size:12px!important;color:#333;padding:0;margin:0!important;opacity:1!important;font-weight:500!important}.sb-dropdown label{padding:0!important}.sb-textarea-container .sb-textarea{padding-top:.5rem!important}.sb-textarea-container label{padding:0!important}.sb-checkbox{padding:1.5rem 0;margin-top:3.2rem}textarea-container .sb-textarea{height:2.9rem;padding-top:.5rem!important}textarea-container label{padding:0!important}sb-icon-dropdown{top:10px!important;right:6px!important}.sb-dropdown,.sb-textarea-container{margin:1rem 0!important}.dynamic-form .sb-search-input::-webkit-input-placeholder{padding-left:1.4rem!important}.dynamic-form .required label:after{content:\"*\";margin:-.2em 0 0 .2em;color:#db2828}.search-container{margin-left:1rem}.w-85{width:85%;max-width:85%}.w-96{width:96%;max-width:96%}.required{color:red}.ui.modal{display:block!important;max-width:45rem}"]
                }] }
    ];
    /** @nocollapse */
    EventCreateComponent.ctorParameters = function () { return [
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
    ]; };
    EventCreateComponent.propDecorators = {
        formFieldProperties: [{ type: Input }],
        userId: [{ type: Input }],
        closeSaveForm: [{ type: Output }],
        navAfterSave: [{ type: Output }]
    };
    return EventCreateComponent;
}());
export { EventCreateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWNyZWF0ZS9ldmVudC1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBRS9CO0lBdURFLDhCQUNVLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGNBQThCLEVBQzlCLFdBQXdCLEVB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QUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdJLE9BQU8sRUFBTyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySSxTQUFTLEVBQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvSixPQUFPLEVBQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FB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LDZDQUFtQjs7SUFDbkIsMENBQTRCOztJQUM1QixzQ0FBMEM7O0lBQzFDLHdEQUE4Qjs7SUFDOUIsb0NBQXFCOztJQUdyQiwyQ0FBMEI7O0lBQzFCLDZDQVlEOztJQUNDLHVDQUFrQjs7SUFDbEIsd0NBQWU7O0lBQ2YsK0NBQThCOztJQWlCOUIsNENBUUc7Ozs7O0lBdEJELDhDQUFzQzs7Ozs7SUFDdEMsa0RBQThDOzs7OztJQUM5QyxrREFBOEM7Ozs7O0lBQzlDLHNDQUFzQjs7Ozs7SUFDdEIsd0NBQTBCOzs7OztJQUMxQiw4Q0FBc0M7Ozs7O0lBQ3RDLDJDQUFnQzs7Ozs7SUFDaEMsMkNBQWdDOzs7OztJQUNoQyx5Q0FBbUM7Ozs7O0lBQ25DLGlEQUE0Qzs7Ozs7SUFDNUMsa0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFdmVudENyZWF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC1jcmVhdGUvZXZlbnQtY3JlYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnREZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgU2JUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pemlUb2FzdC9peml0b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbWV6b25lQ2FsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGltZXpvbmUvdGltZXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBVc2VyQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJDb25maWcvdXNlci1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbWFnZS1zZWFyY2gvaW1hZ2Utc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1ldmVudC1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtRmllbGRQcm9wZXJ0aWVzOiBhbnk7XG4gIEBJbnB1dCgpIHVzZXJJZDogYW55O1xuXG4gIEBPdXRwdXQoKSBjbG9zZVNhdmVGb3JtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmF2QWZ0ZXJTYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9kYXlEYXRlID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpICsgJy0nICsgKCcwJyArICh0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy0nICsgKCcwJyArIHRoaXMudG9kYXkuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG5cbiAgZm9ybVZhbHVlczogYW55O1xuICBzdGFydERhdGU6IGFueSA9IHRoaXMudG9kYXlEYXRlO1xuICBlbmREYXRlOiBhbnkgPSB0aGlzLnRvZGF5RGF0ZTtcbiAgc3RhcnRUaW1lOiBhbnkgPSAoKCcwJyArICh0aGlzLnRvZGF5LmdldEhvdXJzKCkgKyAxKSkpLnNsaWNlKC0yKSArIFwiOlwiICsgKCcwJyArIHRoaXMudG9kYXkuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyB0aGlzLnRvZGF5LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpO1xuICBlbmRUaW1lOiBhbnkgPSAoKCcwJyArICh0aGlzLnRvZGF5LmdldEhvdXJzKCkgKyAyKSkpLnNsaWNlKC0yKSArIFwiOlwiICsgKCcwJyArIHRoaXMudG9kYXkuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyB0aGlzLnRvZGF5LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpO1xuICByZWdpc3RyYXRpb25TdGFydERhdGU6IGFueSA9IHRoaXMudG9kYXlEYXRlO1xuICByZWdpc3RyYXRpb25FbmREYXRlOiBhbnkgPSB0aGlzLnRvZGF5RGF0ZTtcbiAgdGltZURpZmY6IGFueTtcbiAgcXVlcnlQYXJhbXM6IGFueTtcbiAgZXZlbnREZXRhaWxzRm9ybTogYW55O1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICBmb3JtRmllbGREYXRhOiBhbnk7XG4gIEZvcm1EYXRhOiBhbnk7XG4gIGlzTmV3OiBib29sZWFuID0gdHJ1ZTtcbiAgdGltZXpvbmVzaG9ydDogYW55O1xuICBjYW5QdWJsaXNoOiBib29sZWFuID0gZmFsc2U7XG4gIG9mZnNldCA9IHRoaXMudGltZXpvbmVDYWwuZ2V0VGltZU9mZnNldCgpO1xuICBjb25zdEZvcm1GaWVsZFByb3BlcnRpZXM6IGFueTtcbiAgZmxhZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gQW5raXRhIGNoYW5nZXNcbiAgcHVibGljIHNob3dBcHBJY29uID0gdHJ1ZTtcbiAgcHVibGljIGFwcEljb25Db25maWcgPSB7XG4gICAgICBjb2RlOiBcImFwcEljb25cIixcbiAgICAgIGRhdGFUeXBlOiBcInRleHRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcImFwcEljb24gb2YgdGhlIGNvbnRlbnRcIixcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaW5wdXRUeXBlOiBcImFwcEljb25cIixcbiAgICAgIGxhYmVsOiBcIkljb25cIixcbiAgICAgIG5hbWU6IFwiSWNvblwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiSWNvblwiLFxuICAgICAgcmVuZGVyaW5nSGludHM6IHtjbGFzczogXCJzYi1nLWNvbC1sZy0xIHJlcXVpcmVkXCJ9LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2aXNpYmxlOiB0cnVlXG59XG4gIHB1YmxpYyBhcHBJY29uPVwiXCI7XG4gIGVkaXRtb2RlIDogYW55O1xuICBwdWJsaWMgc2hvd0ltYWdlUGlja2VyID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGV2ZW50Q3JlYXRlU2VydmljZTogRXZlbnRDcmVhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXZlbnREZXRhaWxTZXJ2aWNlOiBFdmVudERldGFpbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIHNiVG9hc3RTZXJ2aWNlOiBTYlRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHRpbWV6b25lQ2FsOiBUaW1lem9uZUNhbCxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGltYWdlU2VhcmNoU2VydmljZSA6IEltYWdlU2VhcmNoU2VydmljZSkge1xuXG4gIH1cblxuICBjdXN0b21GaWVsZHMgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzdGFydERhdGU6IFtdID0gdGhpcy50b2RheURhdGUsXG4gICAgZW5kRGF0ZTogW10gPSB0aGlzLnRvZGF5RGF0ZSxcbiAgICBzdGFydFRpbWU6IFtdID0gdGhpcy5zdGFydFRpbWUsXG4gICAgZW5kVGltZTogW10gPSB0aGlzLmVuZFRpbWUsXG4gICAgcmVnaXN0cmF0aW9uU3RhcnREYXRlOiBbXSA9IHRoaXMudG9kYXlEYXRlLFxuICAgIHJlZ2lzdHJhdGlvbkVuZERhdGU6IFtdID0gdGhpcy50b2RheURhdGUsXG5cbiAgfSk7XG5cbiAgLy8gQW5raXRhIGNoYW5nZXNcbiAgbmdPbkNoYW5nZXMoKSB7XG4gIHRoaXMuc2V0QXBwSWNvbkRhdGEoKTtcbn1cblxuLy8gQW5raXRhIGNoYW5nZXNcbnNldEFwcEljb25EYXRhKCkge1xuICBjb25zdCBpc1Jvb3ROb2RlID0gdHJ1ZTtcbiAgXG4gIC8vdGhpcy5hcHBJY29uQ29uZmlnID0gXy5maW5kKF8uZmxhdHRlbihfLm1hcCh0aGlzLnJvb3RGb3JtQ29uZmlnLCAnZmllbGRzJykpLCB7Y29kZTogJ2FwcEljb24nfSk7XG4gIC8vIGlmICghXy5pc1VuZGVmaW5lZCh0aGlzLmFwcEljb25Db25maWcpICYmIGlzUm9vdE5vZGUgPT09IHRydWUpIHtcbiAgLy8gICB0aGlzLnNob3dBcHBJY29uID0gdHJ1ZTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICB0aGlzLnNob3dBcHBJY29uID0gZmFsc2U7XG4gIC8vIH1cbiAgLy8gdGhpcy5hcHBJY29uID0gXy5nZXQodGhpcy5ub2RlTWV0YWRhdGEsICdkYXRhLm1ldGFkYXRhLmFwcEljb24nKTtcbiAgdGhpcy5hcHBJY29uPVwiXCI7XG4gIGlmICh0aGlzLmlzUmV2aWV3TW9kZSgpKSB7XG4gICAgdGhpcy5hcHBJY29uQ29uZmlnID0gey4uLnRoaXMuYXBwSWNvbkNvbmZpZyAsIC4uLiB7aXNBcHBJY29uRWRpdGFibGU6IGZhbHNlfX07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hcHBJY29uQ29uZmlnID0gey4uLnRoaXMuYXBwSWNvbkNvbmZpZyAsIC4uLiB7aXNBcHBJY29uRWRpdGFibGU6IHRydWV9fTtcbiAgfVxuICAvLyBjb25zdCBpZkVkaXRhYmxlID0gdGhpcy5pZkZpZWxkSXNFZGl0YWJsZSgnYXBwSWNvbicpO1xufVxuXG4gIGlzUmV2aWV3TW9kZSgpXG4gIHtcbiAgICB0aGlzLmltYWdlU2VhcmNoU2VydmljZS5nZXRFZGl0TW9kZSgpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgdGhpcy5lZGl0bW9kZSA9IGRhdGEuZC5lZGl0O1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiAgXy5pbmNsdWRlcyhbJ3JldmlldycsICdyZWFkJywgJ3NvdXJjaW5ncmV2aWV3JyBdLCB0aGlzLmVkaXRtb2RlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy50aW1lem9uZXNob3J0ID0gdGhpcy50aW1lem9uZUNhbC50aW1lWm9uZUFiYnJldmlhdGVkKCk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PntcbiAgICAvLyBhbGVydCh0aGlzLnVzZXJJZCk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gcGFyYW1zO1xuICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbXMuaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWVyeVBhcmFtcy5pZGVudGlmaWVyKSB7XG4gICAgICB0aGlzLmV2ZW50Q3JlYXRlU2VydmljZS5nZXRFdmVudEZvcm1Db25maWcoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMgPSBkYXRhLnJlc3VsdFsnZm9ybSddLmRhdGEuZmllbGRzO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXZlbnREZXRhaWxTZXJ2aWNlLmdldEV2ZW50KHRoaXMucXVlcnlQYXJhbXMuaWRlbnRpZmllcikuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IGRhdGEucmVzdWx0LmV2ZW50O1xuICAgICAgfSxcbiAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbXMuaWRlbnRpZmllcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgICB0aGlzLmluaXRpYWxpemVGb3JtRmllbGRzKCksIDUwMCk7XG4gICAgfVxuXG4gICAgbGV0IGdyb3VwID0ge31cbiAgfVxuXG4gIGluaXRpYWxpemVGb3JtRmllbGRzKCkge1xuICAgIHZhciBlZGl0VmFsdWVzID0ge307XG4gICAgdmFyIGV2ZW50U3RhcnQgPSAodGhpcy50aW1lem9uZUNhbC5jYWxjVGltZSh0aGlzLnF1ZXJ5UGFyYW1zWydzdGFydERhdGUnXSwgdGhpcy5xdWVyeVBhcmFtc1snc3RhcnRUaW1lJ10pKTtcbiAgICB2YXIgZXZlbnRFbmQgPSAodGhpcy50aW1lem9uZUNhbC5jYWxjVGltZSh0aGlzLnF1ZXJ5UGFyYW1zWydlbmREYXRlJ10sIHRoaXMucXVlcnlQYXJhbXNbJ2VuZFRpbWUnXSkpO1xuXG5cbiAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xuICAgICAgaWYgKGZvcm1GaWVsZC5jb2RlIGluIHRoaXMucXVlcnlQYXJhbXMpIHtcblxuICAgICAgICBpZiAoZm9ybUZpZWxkLmNvZGUgPT0gJ3ZlbnVlJykge1xuICAgICAgICAgIGZvcm1GaWVsZC5kZWZhdWx0ID0gdGhpcy5xdWVyeVBhcmFtc1tmb3JtRmllbGQuY29kZV1bJ25hbWUnXTtcbiAgICAgICAgICBlZGl0VmFsdWVzW2Zvcm1GaWVsZC5jb2RlXSA9IHRoaXMucXVlcnlQYXJhbXNbZm9ybUZpZWxkLmNvZGVdWyduYW1lJ107XG5cbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRmllbGQuY29kZSA9PSAnb25saW5lUHJvdmlkZXJEYXRhJykge1xuICAgICAgICAgIGZvcm1GaWVsZC5kZWZhdWx0ID0gdGhpcy5xdWVyeVBhcmFtc1tmb3JtRmllbGQuY29kZV1bJ21lZXRpbmdMaW5rJ107XG4gICAgICAgICAgZWRpdFZhbHVlc1tmb3JtRmllbGQuY29kZV0gPSB0aGlzLnF1ZXJ5UGFyYW1zW2Zvcm1GaWVsZC5jb2RlXVsnbWVldGluZ0xpbmsnXTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1GaWVsZC5kZWZhdWx0ID0gdGhpcy5xdWVyeVBhcmFtc1tmb3JtRmllbGQuY29kZV07XG4gICAgICAgICAgZWRpdFZhbHVlc1tmb3JtRmllbGQuY29kZV0gPSB0aGlzLnF1ZXJ5UGFyYW1zW2Zvcm1GaWVsZC5jb2RlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtVmFsdWVzID0gZWRpdFZhbHVlcztcbiAgICB0aGlzLmZvcm1GaWVsZERhdGEgPSB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXM7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtRmllbGREYXRhKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1WYWx1ZXMpO1xuXG4gICAgdGhpcy5jdXN0b21GaWVsZHMgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHN0YXJ0RGF0ZTogW10gPSBldmVudFN0YXJ0LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoJzAnICsgKGV2ZW50U3RhcnQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLScgKyAoJzAnICsgZXZlbnRTdGFydC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcbiAgICAgIGVuZERhdGU6IFtdID0gZXZlbnRFbmQuZ2V0RnVsbFllYXIoKSArICctJyArICgnMCcgKyAoZXZlbnRFbmQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLScgKyAoJzAnICsgZXZlbnRFbmQuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXG4gICAgICBzdGFydFRpbWU6IFtdID0gKCgnMCcgKyAoZXZlbnRTdGFydC5nZXRIb3VycygpKSkpLnNsaWNlKC0yKSArIFwiOlwiICsgKCcwJyArIGV2ZW50U3RhcnQuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyBldmVudFN0YXJ0LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpLFxuICAgICAgZW5kVGltZTogW10gPSAoKCcwJyArIChldmVudEVuZC5nZXRIb3VycygpKSkpLnNsaWNlKC0yKSArIFwiOlwiICsgKCcwJyArIGV2ZW50RW5kLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoJzAnICsgZXZlbnRFbmQuZ2V0U2Vjb25kcygpKS5zbGljZSgtMiksXG4gICAgICByZWdpc3RyYXRpb25TdGFydERhdGU6IFtdID0gdGhpcy5xdWVyeVBhcmFtc1sncmVnaXN0cmF0aW9uU3RhcnREYXRlJ10sXG4gICAgICByZWdpc3RyYXRpb25FbmREYXRlOiBbXSA9IHRoaXMucXVlcnlQYXJhbXNbJ3JlZ2lzdHJhdGlvbkVuZERhdGUnXSxcblxuICAgIH0pO1xuXG4gIH1cblxuICB2YWx1ZUNoYW5nZXMoZXZlbnREYXRhKSB7XG4gICAgaWYgKGV2ZW50RGF0YSkge1xuICAgICAgdGhpcy5mb3JtVmFsdWVzID0gZXZlbnREYXRhO1xuICAgICAgaWYgKHRoaXMuZmxhZykgeyBcbiAgICAgICAgdGhpcy5jb25zdEZvcm1GaWVsZFByb3BlcnRpZXMgPSB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXM7IFxuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTsgXG4gICAgICB9IGVsc2UgXG4gICAgICB7IFxuICAgICAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMgPSB0aGlzLmNvbnN0Rm9ybUZpZWxkUHJvcGVydGllczsgXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcy5mb3JFYWNoKGZvcm1GaWVsZCA9PiB7XG4gICAgICAgICAgICBpZiAoZm9ybUZpZWxkLmNvZGUgPT0gJ2V2ZW50VHlwZScpIHtcbiAgICAgICAgICAgICAgZm9ybUZpZWxkLmRlZmF1bHQgPSBldmVudERhdGEuZXZlbnRUeXBlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICB9XG4gICAgICBpZiAoZXZlbnREYXRhLmV2ZW50VHlwZSA9PSBcIk9mZmxpbmVcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudERhdGEuZXZlbnRUeXBlKTtcbiAgICAgICAgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzID0gdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb2RlICE9PSAnb25saW5lUHJvdmlkZXInKTsgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzID0gdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb2RlICE9PSAnb25saW5lUHJvdmlkZXJEYXRhJyk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50RGF0YS5ldmVudFR5cGUgPT0gXCJPbmxpbmVcIikge1xuICAgICAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMgPSB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvZGUgIT09ICd2ZW51ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgdmFsaWRhdGUgZGF0YSBhbmQgY2FsbCBwb3N0IGZvcm0gc2VydmljZVxuICAgKi9cbiAgcG9zdERhdGEoY2FuUHVibGlzaCkge1xuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMuY2FuUHVibGlzaCA9IGNhblB1Ymxpc2g7XG4gICAgaWYgKHRoaXMuZm9ybVZhbHVlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUGxlYXNlIGVudGVyIGV2ZW50IG5hbWVcIiwgJ3dhcm5pbmcnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybVZhbHVlcy5uYW1lID09IHVuZGVmaW5lZCB8fCB0aGlzLmZvcm1WYWx1ZXMubmFtZS50cmltKCkgPT0gXCJcIikge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgZXZlbnQgbmFtZVwiLCAnd2FybmluZycpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtVmFsdWVzLmNvZGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlBsZWFzZSBlbnRlciBjb2RlXCIsICd3YXJuaW5nJyk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5jdXN0b21GaWVsZHMudmFsdWUuc3RhcnREYXRlID09IHVuZGVmaW5lZCB8fCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5zdGFydFRpbWUgPT0gdW5kZWZpbmVkIHx8ICF0aGlzLnRpbWVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnN0YXJ0RGF0ZSwgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuc3RhcnRUaW1lKSkgJiYgdGhpcy5pc05ldykge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgdmFsaWQgZXZlbnQgc3RhcnQgZGF0ZSBhbmQgdGltZVwiLCAnd2FybmluZycpO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZERhdGUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZFRpbWUgPT0gdW5kZWZpbmVkIHx8ICF0aGlzLnRpbWVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZERhdGUsIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZFRpbWUpKSAmJiB0aGlzLmlzTmV3KSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlBsZWFzZSBlbnRlciB2YWxpZCBldmVudCBlbmQgZGF0ZSBhbmQgdGltZVwiLCAnd2FybmluZycpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5yZWdpc3RyYXRpb25TdGFydERhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlBsZWFzZSBlbnRlciB2YWxpZCBldmVudCByZWdpc3RyYXRpb24gc3RhcnQgZGF0ZVwiLCAnd2FybmluZycpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5yZWdpc3RyYXRpb25FbmREYXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgdmFsaWQgcmVnaXN0cmF0aW9uIGVuZCBkYXRlXCIsICd3YXJuaW5nJyk7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRhdGVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnN0YXJ0RGF0ZSArIFwiIFwiICsgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuc3RhcnRUaW1lLCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmREYXRlICsgXCIgXCIgKyB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmRUaW1lKSkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJFdmVudCBlbmQgZGF0ZSBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIHN0YXJ0IGRhdGVcIiwgJ3dhcm5pbmcnKTtcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0ZVZhbGlkYXRpb24odGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uU3RhcnREYXRlLCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5yZWdpc3RyYXRpb25FbmREYXRlKSkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJSZWdpc3RyYXRpb24gZW5kIGRhdGUgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiByZWdpc3RyYXRpb24gc3RhcnQgZGF0ZVwiLCAnd2FybmluZycpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0ZVZhbGlkYXRpb24odGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uU3RhcnREYXRlICsgXCIgMDA6MDA6MDBcIiwgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuZW5kRGF0ZSkpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUmVnaXN0cmF0aW9uIHN0YXJ0IGRhdGUgc2hvdWxkIGJlIGxlc3MgdGhhbiBldmVudCBlbmQgZGF0ZVwiLCAnd2FybmluZycpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGF0ZVZhbGlkYXRpb24odGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uRW5kRGF0ZSArIFwiIDAwOjAwOjAwXCIsIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZERhdGUpKSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlJlZ2lzdHJhdGlvbiBlbmQgZGF0ZSBzaG91bGQgYmUgbGVzcyB0aGFuIGV2ZW50IGVuZCBkYXRlXCIsICd3YXJuaW5nJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICB0aGlzLmZvcm1WYWx1ZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuZm9ybVZhbHVlcywgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUpXG5cbiAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5mb3JtVmFsdWVzW1wiaWRlbnRpZmllclwiXSA9IHRoaXMucXVlcnlQYXJhbXMuaWRlbnRpZmllcjtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLmZvcm1WYWx1ZXNbXCJzdGFydFRpbWVcIl0gPSB0aGlzLmZvcm1WYWx1ZXNbXCJzdGFydFRpbWVcIl0gKyB0aGlzLm9mZnNldDtcbiAgICAgIHRoaXMuZm9ybVZhbHVlc1tcImVuZFRpbWVcIl0gPSB0aGlzLmZvcm1WYWx1ZXNbXCJlbmRUaW1lXCJdICsgdGhpcy5vZmZzZXQ7XG4gICAgICB0aGlzLmZvcm1WYWx1ZXNbJ29ubGluZVByb3ZpZGVyRGF0YSddID0gKHRoaXMuZm9ybVZhbHVlc1snb25saW5lUHJvdmlkZXJEYXRhJ10gIT0gbnVsbCkgPyAoeyBcIm1lZXRpbmdMaW5rXCI6IHRoaXMuZm9ybVZhbHVlc1snb25saW5lUHJvdmlkZXJEYXRhJ10gfSkgOiB7fTtcbiAgICAgIHRoaXMuZm9ybVZhbHVlc1sndmVudWUnXSA9IHsgXCJuYW1lXCI6IHRoaXMuZm9ybVZhbHVlc1sndmVudWUnXSB9O1xuICAgICAgdGhpcy5mb3JtVmFsdWVzWydvd25lciddID0gdGhpcy51c2VySWQ7XG5cbiAgICAgIGlmICh0aGlzLmlzTmV3KSB7XG4gICAgICAgIHRoaXMuZXZlbnRDcmVhdGVTZXJ2aWNlLmNyZWF0ZUV2ZW50KHRoaXMuZm9ybVZhbHVlcykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VDb2RlID09IFwiT0tcIikge1xuICAgICAgICAgICAgdGhpcy5kYXRhU3VibWl0dGVkKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKGVyci5lcnJvci5yZXN1bHQubWVzc2FnZXNbMF0sICdlcnJvcicpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtVmFsdWVzWyd2ZXJzaW9uS2V5J10gPSB0aGlzLnF1ZXJ5UGFyYW1zLnZlcnNpb25LZXk7XG5cbiAgICAgICAgdGhpcy5ldmVudENyZWF0ZVNlcnZpY2UudXBkYXRlRXZlbnQodGhpcy5mb3JtVmFsdWVzKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZUNvZGUgPT0gXCJPS1wiKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTdWJtaXR0ZWQoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coeyBlcnIgfSk7XG4gICAgICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coZXJyLmVycm9yLnJlc3VsdC5tZXNzYWdlc1swXSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cblxuICBkYXRhU3VibWl0dGVkKGRhdGEpIHtcbiAgICBpZiAodGhpcy5jYW5QdWJsaXNoKSB7XG4gICAgICB0aGlzLmV2ZW50Q3JlYXRlU2VydmljZS5wdWJsaXNoRXZlbnQoZGF0YS5yZXN1bHQuaWRlbnRpZmllcikuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5uYXZBZnRlclNhdmUuZW1pdChkYXRhKTtcbiAgICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJFdmVudCBDcmVhdGVkIFN1Y2Nlc3NmdWxseVwiLCAnc3VjY2VzcycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmF2QWZ0ZXJTYXZlLmVtaXQoZGF0YSk7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIkV2ZW50IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5XCIsICdzdWNjZXNzJyk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuY2xvc2VTYXZlRm9ybS5lbWl0KCk7XG4gICAgLy90aGlzLmxvY2F0aW9uLmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciB0aW1lIHZhbGlkYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSBzZGF0ZSBDb250YWlucyBkYXRhXG4gICAqIEBwYXJhbSB0aW1lIENvbnRhaW5zIHRpbWVcbiAgICogQHJldHVybnMgUmV0dXJuIHRydWUgaWYgZXZlbnQgc3RhcnQgdGltZSBpcyBncmVhdGVyIGN1cnJlbnQgdGltZVxuICAgKi9cbiAgdGltZVZhbGlkYXRpb24oZGF0ZSwgdGltZSkge1xuICAgIHZhciBzdGFydEV2ZW50VGltZSA9IG5ldyBEYXRlKGRhdGUgKyBcIiBcIiArIHRpbWUpO1xuICAgIHZhciBzdGFydERpZmZlcmVuY2UgPSBzdGFydEV2ZW50VGltZS5nZXRUaW1lKCkgLSB0aGlzLnRvZGF5LmdldFRpbWUoKTtcbiAgICB2YXIgdGltZURpZmYgPSBNYXRoLnJvdW5kKHN0YXJ0RGlmZmVyZW5jZSAvIDYwMDAwKTtcblxuICAgIHJldHVybiAodGltZURpZmYgPiAwKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZGF0ZSB2YWxpZGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0gc2RhdGUgQ29udGFpbnMgc3RhcnQgZGF0YVxuICAgKiBAcGFyYW0gZWRhdGUgQ29udGFpbnMgZW5kIGRhdGFcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBkYXRlVmFsaWRhdGlvbihzZGF0ZSwgZWRhdGUpIHtcbiAgICB2YXIgc3RhcnRFdmVudERhdGUgPSBuZXcgRGF0ZShzZGF0ZSk7XG4gICAgdmFyIGVuZEV2ZW50RGF0ZSA9IG5ldyBEYXRlKGVkYXRlKTtcblxuICAgIHZhciBzdGFydERpZmZlcmVuY2UgPSBlbmRFdmVudERhdGUuZ2V0VGltZSgpIC0gc3RhcnRFdmVudERhdGUuZ2V0VGltZSgpO1xuICAgIHZhciB0aW1lRGlmZiA9IE1hdGgucm91bmQoc3RhcnREaWZmZXJlbmNlIC8gNjAwMDApO1xuXG4gICAgcmV0dXJuICh0aW1lRGlmZiA+PSAwKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIEFua2l0YVxuICBhcHBJY29uRGF0YUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCxcIj0gb25jbGlja21ldGhkXCIpO1xuICAgIC8vIHRoaXMuYXBwSWNvbiA9IGV2ZW50LnVybDtcbiAgICAvLyB0aGlzLnRyZWVTZXJ2aWNlLnVwZGF0ZUFwcEljb24oZXZlbnQudXJsKTtcbiAgfSAgXG59XG5cbiJdfQ==