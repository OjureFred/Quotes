export class Quote {
    showBody: boolean;

    constructor(public id: number, public quote: string, public author: string, public significance: string,
        public like: boolean, public upvote: number, public downvote: number) {
        this.showBody = false;
    }
}
