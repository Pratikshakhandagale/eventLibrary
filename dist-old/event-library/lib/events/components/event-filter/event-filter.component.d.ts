import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class EventFilterComponent implements OnInit, OnChanges {
    translate: TranslateService;
    filterValues: any;
    filterOpenStatus: boolean;
    filterChangeEvent: EventEmitter<any>;
    searchFilterFormConfig: any;
    filterConfig: any;
    isFilterShow: boolean;
    filterFields: any;
    currentFilters: any;
    searchQuery: string;
    filterSelectedValues: any[];
    constructor(translate: TranslateService);
    ngOnChanges(): void;
    ngOnInit(): void;
    initializeForm(): void;
    showfilter(): void;
    resetFilter(): void;
    applyFilter(): void;
    emitApplyFilter(): void;
    outputData($event: any): void;
    onStatusChanges($event: any): void;
    valueChanges($event: any): void;
    onQueryEnter(): void;
}
