export class SearchResult {
    public category: string
    public title: string;
    public description: string;

    constructor(category: string, title: string, desc: string) {
        this.category = category
        this.title = title;
        this.description = desc;
    }
}
