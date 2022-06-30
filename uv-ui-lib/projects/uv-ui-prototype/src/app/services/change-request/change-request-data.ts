import { ChangeRequestItem } from "../../models/change-request.model";
import { emptyEntity } from "../../models/entity.model";

export const presetChangeRequests: ChangeRequestItem[] = [

    {
        title: 'Change Request #1',
        updatedDate: 'Mon November 29 2021 16:30:34 GMT-0600 (Mountain Daylight Time)',
        formattedDate: '29/11/2021 9:47 AM',
        priority: 'medium',
        description: 'Description',
        entity: emptyEntity
    },
    {
        title: 'Change Request #2',
        updatedDate: 'Mon November 29 2021 16:30:34 GMT-0600 (Mountain Daylight Time)',
        formattedDate: '29/11/2021 9:47 AM',
        priority: 'low',
        description: 'Description',
        entity: emptyEntity
    },
    {
        title: 'Change Request #3',
        updatedDate: 'Mon November 29 2021 16:30:34 GMT-0600 (Mountain Daylight Time)',
        formattedDate: '29/11/2021 9:47 AM',
        priority: 'high',
        description: 'Description',
        entity: emptyEntity
    },
]