import { IEntity } from '../models/entity.model';

export interface IWalletCategory {
    name: string,
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
                type: 'file',
                name: 'Document',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: '',
                showDetails: false,
                details: '',
                progress: 0,
                tags: [],
                walletFavorite: false,
                walletDate: '',
                formattedWalletDate: '',
                launchbar: false,
                menuActive: false
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
                type: 'file',
                name: 'Material',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: '',
                showDetails: false,
                details: '',
                progress: 0,
                tags: [],
                walletFavorite: false,
                walletDate: '',
                formattedWalletDate: '',
                launchbar: false,
                menuActive: false
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
                type: 'file',
                name: 'Requirement',
                id: 1,
                description: '',
                date: '',
                active: false,
                selected: false,
                disabled: false,
                formattedDate: '',
                showDetails: false,
                details: '',
                progress: 0,
                tags: [],
                walletFavorite: false,
                walletDate: '',
                formattedWalletDate: '',
                launchbar: false,
                menuActive: false
            }
        ]
    }
]
