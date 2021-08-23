export declare class TimezoneCal {
    constructor();
    /**
     * For fing current location time
     *
     * @param date event date
     * @param time event time
     * @returns location base date & time
     */
    calcTime(date: any, time: any): Date;
    /**
     * For get timezone code
     * @returns string (Eg : IST)
     */
    timeZoneAbbreviated: () => string;
    /**
     * To get time offset
     * @returns offset (eg +5.30 etc)
     */
    getTimeOffset(): string;
    pad(value: any): any;
}
