export class gasComponent {
    tag: string = '';
    name: string = '';
    upperbound: any = '';
    lowerbound: any = '';

    constructor(tag: string, name: string, upperbound: any, lowerbound: any) {
        this.tag = tag;
        this.name = name;
        this.upperbound = upperbound;
        this.lowerbound = lowerbound;
    }
}