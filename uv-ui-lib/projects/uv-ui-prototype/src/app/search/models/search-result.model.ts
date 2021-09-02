export class SearchResult {
    public category: string;
    public title: string;
    public description: string;
    public date: string;

    constructor(category: string, title: string, desc: string, date: string) {
        this.category = category;
        this.title = title;
        this.description = desc;
        this.date = date;
    }
}
