import { OnInit } from '@angular/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { EventService } from '../../services/event/event.service';
export declare class JoinEventComponent implements OnInit {
    private eventService;
    private timezoneCal;
    eventDetailItem: any;
    userData: string;
    canUnenroll: boolean;
    todayDateTime: any;
    isUserAbleToJoin: boolean;
    isEnrolled: boolean;
    today: any;
    todayDate: any;
    todayTime: any;
    startInMinutes: any;
    items: any;
    constructor(eventService: EventService, timezoneCal: TimezoneCal);
    ngOnInit(): void;
    /**
     * For validate and show/hide join button
     */
    joinEvent(): Promise<void>;
    /**
      * For check user is enrolled or not
      * @param courseId Event id
      * @param userId Log-in user Id
      */
    isEnrollEvent(): void;
    /**
   * Enroll/Unenroll event
   *
   * @param action enroll/unenroll
   */
    enrollToEvent(action: any): void;
    /**
     * For join attain event
     *
     * @param joinLink event join url
     */
    openProviderLink(joinLink: any): void;
}
