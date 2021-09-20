export class SearchResult {
    public category: string;
    public title: string;
    public description: string;
    public date: string;
    public active: boolean;
    public disabled: boolean;
    public formattedDate: string;

    constructor(category: string, title: string, desc: string, date: string, active: boolean, disabled: boolean, formattedDate: string) {
        this.category = category;
        this.title = title;
        this.description = desc;
        this.date = date;
        this.active = active;
        this.disabled = disabled;
        this.formattedDate = formattedDate;
    }
}
