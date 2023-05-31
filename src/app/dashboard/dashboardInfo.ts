export class dashboardInfo {
    tag: string = '';
    name: string = '';
    setPoint: any = '';
    realtimeValue: any = '';
    unit: string = '';
    designP: string = '';

    constructor(tag: string, name: string, setPoint: any, realtimeValue: any, unit: string, designP: string) { 
        this.tag = tag;
        this.name = name;
        this.setPoint = setPoint;
        this.realtimeValue = realtimeValue;
        this.unit = unit;
        this.designP = designP;
    }
}

