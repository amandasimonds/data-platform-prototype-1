export class SearchResult {
    public category: string;
    public name: string;
    public id: number;
    public description: string;
    public date: string;
    public active: boolean;
    public disabled: boolean;
    public formattedDate: string;

    constructor(category: string, name: string, id: number, desc: string, date: string, active: boolean, disabled: boolean, formattedDate: string) {
        this.category = category;
        this.name = name;
        this.id = id;
        this.description = desc;
        this.date = date;
        this.active = active;
        this.disabled = disabled;
        this.formattedDate = formattedDate;
    }
}
