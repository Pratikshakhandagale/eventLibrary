/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-create/event-create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class EventCreateComponent {
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
    isReviewMode()
    {
        this.imageSearchService.getEditMode().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.editmode = data.d.edit;
        }));
        return _.includes(['review', 'read', 'sourcingreview'], this.editmode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWNyZWF0ZS9ldmVudC1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBc0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7QUFRL0IsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7SUFpRC9CLFlBQ1UsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsUUFB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QztZQUN6QyxTQUFTLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdJLE9BQU8sRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckksU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9KLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFH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RDs7SUFDQyx1Q0FBa0I7O0lBQ2xCLHdDQUFlOztJQUNmLCtDQUE4Qjs7SUFpQjlCLDRDQVFHOzs7OztJQXRCRCw4Q0FBc0M7Ozs7O0lBQ3RDLGtEQUE4Qzs7Ozs7SUFDOUMsa0RBQThDOzs7OztJQUM5QyxzQ0FBc0I7Ozs7O0lBQ3RCLHdDQUEwQjs7Ozs7SUFDMUIsOENBQXNDOzs7OztJQUN0QywyQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFnQzs7Ozs7SUFDaEMseUNBQW1DOzs7OztJQUNuQyxpREFBNEM7Ozs7O0lBQzVDLGtEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXZlbnRDcmVhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50RGV0YWlsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFNiVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaXppVG9hc3QvaXppdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUaW1lem9uZUNhbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RpbWV6b25lL3RpbWV6b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW1hZ2Utc2VhcmNoL2ltYWdlLXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50Q3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybUZpZWxkUHJvcGVydGllczogYW55O1xuICBASW5wdXQoKSB1c2VySWQ6IGFueTtcblxuICBAT3V0cHV0KCkgY2xvc2VTYXZlRm9ybSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG5hdkFmdGVyU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHRvZGF5RGF0ZSA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKSArICctJyArICgnMCcgKyAodGhpcy50b2RheS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArICctJyArICgnMCcgKyB0aGlzLnRvZGF5LmdldERhdGUoKSkuc2xpY2UoLTIpO1xuXG4gIGZvcm1WYWx1ZXM6IGFueTtcbiAgc3RhcnREYXRlOiBhbnkgPSB0aGlzLnRvZGF5RGF0ZTtcbiAgZW5kRGF0ZTogYW55ID0gdGhpcy50b2RheURhdGU7XG4gIHN0YXJ0VGltZTogYW55ID0gKCgnMCcgKyAodGhpcy50b2RheS5nZXRIb3VycygpICsgMSkpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyB0aGlzLnRvZGF5LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoJzAnICsgdGhpcy50b2RheS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTtcbiAgZW5kVGltZTogYW55ID0gKCgnMCcgKyAodGhpcy50b2RheS5nZXRIb3VycygpICsgMikpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyB0aGlzLnRvZGF5LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoJzAnICsgdGhpcy50b2RheS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTtcbiAgcmVnaXN0cmF0aW9uU3RhcnREYXRlOiBhbnkgPSB0aGlzLnRvZGF5RGF0ZTtcbiAgcmVnaXN0cmF0aW9uRW5kRGF0ZTogYW55ID0gdGhpcy50b2RheURhdGU7XG4gIHRpbWVEaWZmOiBhbnk7XG4gIHF1ZXJ5UGFyYW1zOiBhbnk7XG4gIGV2ZW50RGV0YWlsc0Zvcm06IGFueTtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgZm9ybUZpZWxkRGF0YTogYW55O1xuICBGb3JtRGF0YTogYW55O1xuICBpc05ldzogYm9vbGVhbiA9IHRydWU7XG4gIHRpbWV6b25lc2hvcnQ6IGFueTtcbiAgY2FuUHVibGlzaDogYm9vbGVhbiA9IGZhbHNlO1xuICBvZmZzZXQgPSB0aGlzLnRpbWV6b25lQ2FsLmdldFRpbWVPZmZzZXQoKTtcbiAgY29uc3RGb3JtRmllbGRQcm9wZXJ0aWVzOiBhbnk7XG4gIGZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIEFua2l0YSBjaGFuZ2VzXG4gIHB1YmxpYyBzaG93QXBwSWNvbiA9IHRydWU7XG4gIHB1YmxpYyBhcHBJY29uQ29uZmlnID0ge1xuICAgICAgY29kZTogXCJhcHBJY29uXCIsXG4gICAgICBkYXRhVHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJhcHBJY29uIG9mIHRoZSBjb250ZW50XCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlucHV0VHlwZTogXCJhcHBJY29uXCIsXG4gICAgICBsYWJlbDogXCJJY29uXCIsXG4gICAgICBuYW1lOiBcIkljb25cIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkljb25cIixcbiAgICAgIHJlbmRlcmluZ0hpbnRzOiB7Y2xhc3M6IFwic2ItZy1jb2wtbGctMSByZXF1aXJlZFwifSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxufVxuICBwdWJsaWMgYXBwSWNvbj1cIlwiO1xuICBlZGl0bW9kZSA6IGFueTtcbiAgcHVibGljIHNob3dJbWFnZVBpY2tlciA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBldmVudENyZWF0ZVNlcnZpY2U6IEV2ZW50Q3JlYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50RGV0YWlsU2VydmljZTogRXZlbnREZXRhaWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBzYlRvYXN0U2VydmljZTogU2JUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB0aW1lem9uZUNhbDogVGltZXpvbmVDYWwsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyQ29uZmlnU2VydmljZTogVXNlckNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbWFnZVNlYXJjaFNlcnZpY2UgOiBJbWFnZVNlYXJjaFNlcnZpY2UpIHtcblxuICB9XG5cbiAgY3VzdG9tRmllbGRzID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc3RhcnREYXRlOiBbXSA9IHRoaXMudG9kYXlEYXRlLFxuICAgIGVuZERhdGU6IFtdID0gdGhpcy50b2RheURhdGUsXG4gICAgc3RhcnRUaW1lOiBbXSA9IHRoaXMuc3RhcnRUaW1lLFxuICAgIGVuZFRpbWU6IFtdID0gdGhpcy5lbmRUaW1lLFxuICAgIHJlZ2lzdHJhdGlvblN0YXJ0RGF0ZTogW10gPSB0aGlzLnRvZGF5RGF0ZSxcbiAgICByZWdpc3RyYXRpb25FbmREYXRlOiBbXSA9IHRoaXMudG9kYXlEYXRlLFxuXG4gIH0pO1xuXG4gIC8vIEFua2l0YSBjaGFuZ2VzXG4gIG5nT25DaGFuZ2VzKCkge1xuICB0aGlzLnNldEFwcEljb25EYXRhKCk7XG59XG5cbi8vIEFua2l0YSBjaGFuZ2VzXG5zZXRBcHBJY29uRGF0YSgpIHtcbiAgY29uc3QgaXNSb290Tm9kZSA9IHRydWU7XG4gIFxuICAvL3RoaXMuYXBwSWNvbkNvbmZpZyA9IF8uZmluZChfLmZsYXR0ZW4oXy5tYXAodGhpcy5yb290Rm9ybUNvbmZpZywgJ2ZpZWxkcycpKSwge2NvZGU6ICdhcHBJY29uJ30pO1xuICAvLyBpZiAoIV8uaXNVbmRlZmluZWQodGhpcy5hcHBJY29uQ29uZmlnKSAmJiBpc1Jvb3ROb2RlID09PSB0cnVlKSB7XG4gIC8vICAgdGhpcy5zaG93QXBwSWNvbiA9IHRydWU7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgdGhpcy5zaG93QXBwSWNvbiA9IGZhbHNlO1xuICAvLyB9XG4gIC8vIHRoaXMuYXBwSWNvbiA9IF8uZ2V0KHRoaXMubm9kZU1ldGFkYXRhLCAnZGF0YS5tZXRhZGF0YS5hcHBJY29uJyk7XG4gIHRoaXMuYXBwSWNvbj1cIlwiO1xuICBpZiAodGhpcy5pc1Jldmlld01vZGUoKSkge1xuICAgIHRoaXMuYXBwSWNvbkNvbmZpZyA9IHsuLi50aGlzLmFwcEljb25Db25maWcgLCAuLi4ge2lzQXBwSWNvbkVkaXRhYmxlOiBmYWxzZX19O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXBwSWNvbkNvbmZpZyA9IHsuLi50aGlzLmFwcEljb25Db25maWcgLCAuLi4ge2lzQXBwSWNvbkVkaXRhYmxlOiB0cnVlfX07XG4gIH1cbiAgLy8gY29uc3QgaWZFZGl0YWJsZSA9IHRoaXMuaWZGaWVsZElzRWRpdGFibGUoJ2FwcEljb24nKTtcbn1cblxuICBpc1Jldmlld01vZGUoKVxuICB7XG4gICAgdGhpcy5pbWFnZVNlYXJjaFNlcnZpY2UuZ2V0RWRpdE1vZGUoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgIHRoaXMuZWRpdG1vZGUgPSBkYXRhLmQuZWRpdDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gIF8uaW5jbHVkZXMoWydyZXZpZXcnLCAncmVhZCcsICdzb3VyY2luZ3JldmlldycgXSwgdGhpcy5lZGl0bW9kZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMudGltZXpvbmVzaG9ydCA9IHRoaXMudGltZXpvbmVDYWwudGltZVpvbmVBYmJyZXZpYXRlZCgpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT57XG4gICAgLy8gYWxlcnQodGhpcy51c2VySWQpO1xuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IHBhcmFtcztcbiAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbXMuaWRlbnRpZmllcikge1xuICAgICAgdGhpcy5ldmVudENyZWF0ZVNlcnZpY2UuZ2V0RXZlbnRGb3JtQ29uZmlnKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzID0gZGF0YS5yZXN1bHRbJ2Zvcm0nXS5kYXRhLmZpZWxkcztcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV2ZW50RGV0YWlsU2VydmljZS5nZXRFdmVudCh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXMgPSBkYXRhLnJlc3VsdC5ldmVudDtcbiAgICAgIH0sXG4gICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnIgPSAnLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplRm9ybUZpZWxkcygpLCA1MDApO1xuICAgIH1cblxuICAgIGxldCBncm91cCA9IHt9XG4gIH1cblxuICBpbml0aWFsaXplRm9ybUZpZWxkcygpIHtcbiAgICB2YXIgZWRpdFZhbHVlcyA9IHt9O1xuICAgIHZhciBldmVudFN0YXJ0ID0gKHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5xdWVyeVBhcmFtc1snc3RhcnREYXRlJ10sIHRoaXMucXVlcnlQYXJhbXNbJ3N0YXJ0VGltZSddKSk7XG4gICAgdmFyIGV2ZW50RW5kID0gKHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5xdWVyeVBhcmFtc1snZW5kRGF0ZSddLCB0aGlzLnF1ZXJ5UGFyYW1zWydlbmRUaW1lJ10pKTtcblxuXG4gICAgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzLmZvckVhY2goZm9ybUZpZWxkID0+IHtcbiAgICAgIGlmIChmb3JtRmllbGQuY29kZSBpbiB0aGlzLnF1ZXJ5UGFyYW1zKSB7XG5cbiAgICAgICAgaWYgKGZvcm1GaWVsZC5jb2RlID09ICd2ZW51ZScpIHtcbiAgICAgICAgICBmb3JtRmllbGQuZGVmYXVsdCA9IHRoaXMucXVlcnlQYXJhbXNbZm9ybUZpZWxkLmNvZGVdWyduYW1lJ107XG4gICAgICAgICAgZWRpdFZhbHVlc1tmb3JtRmllbGQuY29kZV0gPSB0aGlzLnF1ZXJ5UGFyYW1zW2Zvcm1GaWVsZC5jb2RlXVsnbmFtZSddO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybUZpZWxkLmNvZGUgPT0gJ29ubGluZVByb3ZpZGVyRGF0YScpIHtcbiAgICAgICAgICBmb3JtRmllbGQuZGVmYXVsdCA9IHRoaXMucXVlcnlQYXJhbXNbZm9ybUZpZWxkLmNvZGVdWydtZWV0aW5nTGluayddO1xuICAgICAgICAgIGVkaXRWYWx1ZXNbZm9ybUZpZWxkLmNvZGVdID0gdGhpcy5xdWVyeVBhcmFtc1tmb3JtRmllbGQuY29kZV1bJ21lZXRpbmdMaW5rJ107XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtRmllbGQuZGVmYXVsdCA9IHRoaXMucXVlcnlQYXJhbXNbZm9ybUZpZWxkLmNvZGVdO1xuICAgICAgICAgIGVkaXRWYWx1ZXNbZm9ybUZpZWxkLmNvZGVdID0gdGhpcy5xdWVyeVBhcmFtc1tmb3JtRmllbGQuY29kZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybVZhbHVlcyA9IGVkaXRWYWx1ZXM7XG4gICAgdGhpcy5mb3JtRmllbGREYXRhID0gdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUZpZWxkRGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtVmFsdWVzKTtcblxuICAgIHRoaXMuY3VzdG9tRmllbGRzID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzdGFydERhdGU6IFtdID0gZXZlbnRTdGFydC5nZXRGdWxsWWVhcigpICsgJy0nICsgKCcwJyArIChldmVudFN0YXJ0LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy0nICsgKCcwJyArIGV2ZW50U3RhcnQuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXG4gICAgICBlbmREYXRlOiBbXSA9IGV2ZW50RW5kLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoJzAnICsgKGV2ZW50RW5kLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy0nICsgKCcwJyArIGV2ZW50RW5kLmdldERhdGUoKSkuc2xpY2UoLTIpLFxuICAgICAgc3RhcnRUaW1lOiBbXSA9ICgoJzAnICsgKGV2ZW50U3RhcnQuZ2V0SG91cnMoKSkpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyBldmVudFN0YXJ0LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoJzAnICsgZXZlbnRTdGFydC5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKSxcbiAgICAgIGVuZFRpbWU6IFtdID0gKCgnMCcgKyAoZXZlbnRFbmQuZ2V0SG91cnMoKSkpKS5zbGljZSgtMikgKyBcIjpcIiArICgnMCcgKyBldmVudEVuZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKCcwJyArIGV2ZW50RW5kLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhcnREYXRlOiBbXSA9IHRoaXMucXVlcnlQYXJhbXNbJ3JlZ2lzdHJhdGlvblN0YXJ0RGF0ZSddLFxuICAgICAgcmVnaXN0cmF0aW9uRW5kRGF0ZTogW10gPSB0aGlzLnF1ZXJ5UGFyYW1zWydyZWdpc3RyYXRpb25FbmREYXRlJ10sXG5cbiAgICB9KTtcblxuICB9XG5cbiAgdmFsdWVDaGFuZ2VzKGV2ZW50RGF0YSkge1xuICAgIGlmIChldmVudERhdGEpIHtcbiAgICAgIHRoaXMuZm9ybVZhbHVlcyA9IGV2ZW50RGF0YTtcbiAgICAgIGlmICh0aGlzLmZsYWcpIHsgXG4gICAgICAgIHRoaXMuY29uc3RGb3JtRmllbGRQcm9wZXJ0aWVzID0gdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzOyBcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7IFxuICAgICAgfSBlbHNlIFxuICAgICAgeyBcbiAgICAgICAgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzID0gdGhpcy5jb25zdEZvcm1GaWVsZFByb3BlcnRpZXM7IFxuICAgICAgICB0aGlzLmZvcm1GaWVsZFByb3BlcnRpZXMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGZvcm1GaWVsZC5jb2RlID09ICdldmVudFR5cGUnKSB7XG4gICAgICAgICAgICAgIGZvcm1GaWVsZC5kZWZhdWx0ID0gZXZlbnREYXRhLmV2ZW50VHlwZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50RGF0YS5ldmVudFR5cGUgPT0gXCJPZmZsaW5lXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnREYXRhLmV2ZW50VHlwZSk7XG4gICAgICAgIHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcyA9IHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29kZSAhPT0gJ29ubGluZVByb3ZpZGVyJyk7IHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcyA9IHRoaXMuZm9ybUZpZWxkUHJvcGVydGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29kZSAhPT0gJ29ubGluZVByb3ZpZGVyRGF0YScpO1xuICAgICAgfSBlbHNlIGlmIChldmVudERhdGEuZXZlbnRUeXBlID09IFwiT25saW5lXCIpIHtcbiAgICAgICAgdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzID0gdGhpcy5mb3JtRmllbGRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb2RlICE9PSAndmVudWUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yIHZhbGlkYXRlIGRhdGEgYW5kIGNhbGwgcG9zdCBmb3JtIHNlcnZpY2VcbiAgICovXG4gIHBvc3REYXRhKGNhblB1Ymxpc2gpIHtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNhblB1Ymxpc2ggPSBjYW5QdWJsaXNoO1xuICAgIGlmICh0aGlzLmZvcm1WYWx1ZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlBsZWFzZSBlbnRlciBldmVudCBuYW1lXCIsICd3YXJuaW5nJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1WYWx1ZXMubmFtZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5mb3JtVmFsdWVzLm5hbWUudHJpbSgpID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUGxlYXNlIGVudGVyIGV2ZW50IG5hbWVcIiwgJ3dhcm5pbmcnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybVZhbHVlcy5jb2RlID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgY29kZVwiLCAnd2FybmluZycpO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuc3RhcnRUaW1lID09IHVuZGVmaW5lZCB8fCAhdGhpcy50aW1lVmFsaWRhdGlvbih0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5zdGFydERhdGUsIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnN0YXJ0VGltZSkpICYmIHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUGxlYXNlIGVudGVyIHZhbGlkIGV2ZW50IHN0YXJ0IGRhdGUgYW5kIHRpbWVcIiwgJ3dhcm5pbmcnKTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmREYXRlID09IHVuZGVmaW5lZCB8fCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmRUaW1lID09IHVuZGVmaW5lZCB8fCAhdGhpcy50aW1lVmFsaWRhdGlvbih0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmREYXRlLCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmRUaW1lKSkgJiYgdGhpcy5pc05ldykge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgdmFsaWQgZXZlbnQgZW5kIGRhdGUgYW5kIHRpbWVcIiwgJ3dhcm5pbmcnKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uU3RhcnREYXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJQbGVhc2UgZW50ZXIgdmFsaWQgZXZlbnQgcmVnaXN0cmF0aW9uIHN0YXJ0IGRhdGVcIiwgJ3dhcm5pbmcnKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uRW5kRGF0ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUGxlYXNlIGVudGVyIHZhbGlkIHJlZ2lzdHJhdGlvbiBlbmQgZGF0ZVwiLCAnd2FybmluZycpO1xuXG4gICAgfSBlbHNlIGlmICghdGhpcy5kYXRlVmFsaWRhdGlvbih0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnN0YXJ0VGltZSwgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuZW5kRGF0ZSArIFwiIFwiICsgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUuZW5kVGltZSkpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiRXZlbnQgZW5kIGRhdGUgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBzdGFydCBkYXRlXCIsICd3YXJuaW5nJyk7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRhdGVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnJlZ2lzdHJhdGlvblN0YXJ0RGF0ZSwgdGhpcy5jdXN0b21GaWVsZHMudmFsdWUucmVnaXN0cmF0aW9uRW5kRGF0ZSkpIHtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiUmVnaXN0cmF0aW9uIGVuZCBkYXRlIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gcmVnaXN0cmF0aW9uIHN0YXJ0IGRhdGVcIiwgJ3dhcm5pbmcnKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRhdGVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnJlZ2lzdHJhdGlvblN0YXJ0RGF0ZSArIFwiIDAwOjAwOjAwXCIsIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLmVuZERhdGUpKSB7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIlJlZ2lzdHJhdGlvbiBzdGFydCBkYXRlIHNob3VsZCBiZSBsZXNzIHRoYW4gZXZlbnQgZW5kIGRhdGVcIiwgJ3dhcm5pbmcnKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmRhdGVWYWxpZGF0aW9uKHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlLnJlZ2lzdHJhdGlvbkVuZERhdGUgKyBcIiAwMDowMDowMFwiLCB0aGlzLmN1c3RvbUZpZWxkcy52YWx1ZS5lbmREYXRlKSkge1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJSZWdpc3RyYXRpb24gZW5kIGRhdGUgc2hvdWxkIGJlIGxlc3MgdGhhbiBldmVudCBlbmQgZGF0ZVwiLCAnd2FybmluZycpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgdGhpcy5mb3JtVmFsdWVzID0gT2JqZWN0LmFzc2lnbih0aGlzLmZvcm1WYWx1ZXMsIHRoaXMuY3VzdG9tRmllbGRzLnZhbHVlKVxuXG4gICAgICBpZiAodGhpcy5xdWVyeVBhcmFtcy5pZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMuZm9ybVZhbHVlc1tcImlkZW50aWZpZXJcIl0gPSB0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXI7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5mb3JtVmFsdWVzW1wic3RhcnRUaW1lXCJdID0gdGhpcy5mb3JtVmFsdWVzW1wic3RhcnRUaW1lXCJdICsgdGhpcy5vZmZzZXQ7XG4gICAgICB0aGlzLmZvcm1WYWx1ZXNbXCJlbmRUaW1lXCJdID0gdGhpcy5mb3JtVmFsdWVzW1wiZW5kVGltZVwiXSArIHRoaXMub2Zmc2V0O1xuICAgICAgdGhpcy5mb3JtVmFsdWVzWydvbmxpbmVQcm92aWRlckRhdGEnXSA9ICh0aGlzLmZvcm1WYWx1ZXNbJ29ubGluZVByb3ZpZGVyRGF0YSddICE9IG51bGwpID8gKHsgXCJtZWV0aW5nTGlua1wiOiB0aGlzLmZvcm1WYWx1ZXNbJ29ubGluZVByb3ZpZGVyRGF0YSddIH0pIDoge307XG4gICAgICB0aGlzLmZvcm1WYWx1ZXNbJ3ZlbnVlJ10gPSB7IFwibmFtZVwiOiB0aGlzLmZvcm1WYWx1ZXNbJ3ZlbnVlJ10gfTtcbiAgICAgIHRoaXMuZm9ybVZhbHVlc1snb3duZXInXSA9IHRoaXMudXNlcklkO1xuXG4gICAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgICB0aGlzLmV2ZW50Q3JlYXRlU2VydmljZS5jcmVhdGVFdmVudCh0aGlzLmZvcm1WYWx1ZXMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlQ29kZSA9PSBcIk9LXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVN1Ym1pdHRlZChkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IGVyciB9KTtcbiAgICAgICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhlcnIuZXJyb3IucmVzdWx0Lm1lc3NhZ2VzWzBdLCAnZXJyb3InKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybVZhbHVlc1sndmVyc2lvbktleSddID0gdGhpcy5xdWVyeVBhcmFtcy52ZXJzaW9uS2V5O1xuXG4gICAgICAgIHRoaXMuZXZlbnRDcmVhdGVTZXJ2aWNlLnVwZGF0ZUV2ZW50KHRoaXMuZm9ybVZhbHVlcykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VDb2RlID09IFwiT0tcIikge1xuICAgICAgICAgICAgdGhpcy5kYXRhU3VibWl0dGVkKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKGVyci5lcnJvci5yZXN1bHQubWVzc2FnZXNbMF0sICdlcnJvcicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgZGF0YVN1Ym1pdHRlZChkYXRhKSB7XG4gICAgaWYgKHRoaXMuY2FuUHVibGlzaCkge1xuICAgICAgdGhpcy5ldmVudENyZWF0ZVNlcnZpY2UucHVibGlzaEV2ZW50KGRhdGEucmVzdWx0LmlkZW50aWZpZXIpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgIHRoaXMubmF2QWZ0ZXJTYXZlLmVtaXQoZGF0YSk7XG4gICAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiRXZlbnQgQ3JlYXRlZCBTdWNjZXNzZnVsbHlcIiwgJ3N1Y2Nlc3MnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdkFmdGVyU2F2ZS5lbWl0KGRhdGEpO1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coXCJFdmVudCBDcmVhdGVkIFN1Y2Nlc3NmdWxseVwiLCAnc3VjY2VzcycpO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNsb3NlU2F2ZUZvcm0uZW1pdCgpO1xuICAgIC8vdGhpcy5sb2NhdGlvbi5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgdGltZSB2YWxpZGF0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0gc2RhdGUgQ29udGFpbnMgZGF0YVxuICAgKiBAcGFyYW0gdGltZSBDb250YWlucyB0aW1lXG4gICAqIEByZXR1cm5zIFJldHVybiB0cnVlIGlmIGV2ZW50IHN0YXJ0IHRpbWUgaXMgZ3JlYXRlciBjdXJyZW50IHRpbWVcbiAgICovXG4gIHRpbWVWYWxpZGF0aW9uKGRhdGUsIHRpbWUpIHtcbiAgICB2YXIgc3RhcnRFdmVudFRpbWUgPSBuZXcgRGF0ZShkYXRlICsgXCIgXCIgKyB0aW1lKTtcbiAgICB2YXIgc3RhcnREaWZmZXJlbmNlID0gc3RhcnRFdmVudFRpbWUuZ2V0VGltZSgpIC0gdGhpcy50b2RheS5nZXRUaW1lKCk7XG4gICAgdmFyIHRpbWVEaWZmID0gTWF0aC5yb3VuZChzdGFydERpZmZlcmVuY2UgLyA2MDAwMCk7XG5cbiAgICByZXR1cm4gKHRpbWVEaWZmID4gMCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGRhdGUgdmFsaWRhdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHNkYXRlIENvbnRhaW5zIHN0YXJ0IGRhdGFcbiAgICogQHBhcmFtIGVkYXRlIENvbnRhaW5zIGVuZCBkYXRhXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgZGF0ZVZhbGlkYXRpb24oc2RhdGUsIGVkYXRlKSB7XG4gICAgdmFyIHN0YXJ0RXZlbnREYXRlID0gbmV3IERhdGUoc2RhdGUpO1xuICAgIHZhciBlbmRFdmVudERhdGUgPSBuZXcgRGF0ZShlZGF0ZSk7XG5cbiAgICB2YXIgc3RhcnREaWZmZXJlbmNlID0gZW5kRXZlbnREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RXZlbnREYXRlLmdldFRpbWUoKTtcbiAgICB2YXIgdGltZURpZmYgPSBNYXRoLnJvdW5kKHN0YXJ0RGlmZmVyZW5jZSAvIDYwMDAwKTtcblxuICAgIHJldHVybiAodGltZURpZmYgPj0gMCkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvLyBBbmtpdGFcbiAgYXBwSWNvbkRhdGFIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQsXCI9IG9uY2xpY2ttZXRoZFwiKTtcbiAgICAvLyB0aGlzLmFwcEljb24gPSBldmVudC51cmw7XG4gICAgLy8gdGhpcy50cmVlU2VydmljZS51cGRhdGVBcHBJY29uKGV2ZW50LnVybCk7XG4gIH0gIFxufVxuXG4iXX0=