export class Quote {
    showDetail: boolean;

    constructor(public id: number, public quote: string, public author: string, public category: string, public significance: string,
        public like: boolean, public upvote: number, public downvote: number) {
        this.showDetail = false;
    }
}
