export interface IEntity {
    category: string;
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
}
