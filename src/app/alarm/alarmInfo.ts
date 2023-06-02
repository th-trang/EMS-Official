export class alarmData {
    tag: string = '';
    name: string = '';
    realtimeValue: any;
    date: any;
    status: string = '';

    constructor(tag: string, name: string, realtimeValue: any, date: any, status: string) {
        this.tag = tag;
        this.name = name;
        this.realtimeValue = realtimeValue;
        this.date= date;
        this.status = status;
    }
}