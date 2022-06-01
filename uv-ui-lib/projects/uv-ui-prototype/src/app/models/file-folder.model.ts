import { IEntity } from './entity.model';

export interface IFileFolder {
    name?: string;
    type?: string;
    folders?: IFileFolder[];
    files?: IEntity[];
    open?: boolean;
    shared?: boolean;
    menuOpen?: boolean;
    file?: IEntity;
    menuActive?: boolean;
}