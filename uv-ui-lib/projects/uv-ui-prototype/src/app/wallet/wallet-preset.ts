import { IEntity } from '../models/entity.model';

export interface IWalletCategory {
    name: string;
    open: boolean;
    selected: boolean;
    items: IEntity[];
}

export const presetWallet: IWalletCategory[] = [
    {
        name: 'Documents',
        open: false,
        selected: false,
        items: [
            {
                category: 'Documents',
                name: 'Document',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: ''
            },
        ]
    },
    {
        name: 'Materials',
        open: false,
        selected: false,
        items: [ 
            {
                category: 'Materials',
                name: 'Material',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: ''
            }
        ]
    },
    {
        name: 'Category Label',
        open: false,
        selected: false,
        items: [
            {
                category: 'Requirements',
                name: 'Requirement',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: ''
            }
        ]
    }
]
