export class dashboardInfo {
    tag: string = '';
    name: string = '';
    expectedValue: any = '';
    realtimeValue: any = '';
    unit: string = '';
    designP: string = '';

    constructor(tag: string, name: string, expectedValue: any, realtimeValue: any, unit: string, designP: string) { 
        this.tag = tag;
        this.name = name;
        this.expectedValue = expectedValue;
        this.realtimeValue = realtimeValue;
        this.unit = unit;
        this.designP = designP;
    }
}

