export interface IEntity {
    category: string;
    type: string;
    name: string;
    id: number;
    description: string;
    date: string;
    active: boolean;
    selected: boolean;
    disabled: boolean;
    formattedDate: string;
    showDetails: boolean;
    details: string;
    progress: number;
    tags: string[];
    walletFavorite: boolean;
    walletDate: string;
    formattedWalletDate: string;
    launchbar: boolean;
    menuActive: boolean;
}

export const emptyEntity: IEntity = {
    category: '',
    type: 'file',
    name: '',
    id: 0,
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
