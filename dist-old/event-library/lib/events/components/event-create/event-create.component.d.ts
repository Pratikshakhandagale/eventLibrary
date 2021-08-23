import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventCreateService } from '../../services/event-create/event-create.service';
import { EventDetailService } from '../../services/event-detail/event-detail.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { TranslateService } from '@ngx-translate/core';
import { UserConfigService } from '../../services/userConfig/user-config.service';
import { ImageSearchService } from '../../services/image-search/image-search.service';
export declare class EventCreateComponent implements OnInit {
    private activatedRoute;
    private eventCreateService;
    private eventDetailService;
    private router;
    private location;
    private sbToastService;
    private formBuilder;
    private timezoneCal;
    private translate;
    private userConfigService;
    private imageSearchService;
    formFieldProperties: any;
    userId: any;
    closeSaveForm: EventEmitter<any>;
    navAfterSave: EventEmitter<any>;
    today: Date;
    todayDate: string;
    formValues: any;
    startDate: any;
    endDate: any;
    startTime: any;
    endTime: any;
    registrationStartDate: any;
    registrationEndDate: any;
    timeDiff: any;
    queryParams: any;
    eventDetailsForm: any;
    isSubmitted: boolean;
    formFieldData: any;
    FormData: any;
    isNew: boolean;
    timezoneshort: any;
    canPublish: boolean;
    offset: string;
    constFormFieldProperties: any;
    flag: boolean;
    showAppIcon: boolean;
    appIconConfig: {
        code: string;
        dataType: string;
        description: string;
        editable: boolean;
        inputType: string;
        label: string;
        name: string;
        placeholder: string;
        renderingHints: {
            class: string;
        };
        required: boolean;
        visible: boolean;
    };
    appIcon: string;
    editmode: any;
    showImagePicker: boolean;
    constructor(activatedRoute: ActivatedRoute, eventCreateService: EventCreateService, eventDetailService: EventDetailService, router: Router, location: Location, sbToastService: SbToastService, formBuilder: FormBuilder, timezoneCal: TimezoneCal, translate: TranslateService, userConfigService: UserConfigService, imageSearchService: ImageSearchService);
    customFields: FormGroup;
    ngOnChanges(): void;
    setAppIconData(): void;
    isReviewMode(): any;
    ngOnInit(): void;
    initializeFormFields(): void;
    valueChanges(eventData: any): void;
    /**
     * For validate data and call post form service
     */
    postData(canPublish: any): void;
    dataSubmitted(data: any): void;
    cancel(): void;
    /**
     * For time validation
     *
     * @param sdate Contains data
     * @param time Contains time
     * @returns Return true if event start time is greater current time
     */
    timeValidation(date: any, time: any): boolean;
    /**
     * For date validation
     *
     * @param sdate Contains start data
     * @param edate Contains end data
     * @returns
     */
    dateValidation(sdate: any, edate: any): boolean;
    appIconDataHandler(event: any): void;
}
