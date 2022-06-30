import { IEntity } from "./entity.model";

export interface ChangeRequestItem {
    title: string;
    priority: string;
    updatedDate: string;
    formattedDate: string;
    description: string;
    entity: IEntity;
}