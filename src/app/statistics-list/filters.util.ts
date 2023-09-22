export class Filters {
    static dateFormat(d: string): string {
         if (d === '' || d === undefined) {
             return '';
         }
         const date = new Date(d);
         date.toLocaleString('fr-FR', { hour: 'numeric', hour12: true });
         const monthNames = [
             '01', '02', '03',
             '04', '05', '06', '07',
             '08', '09', '10',
             '11', '12'
         ];
         const m = Number(date.getMonth() + 1);
         const month = m < 10 ? '0' + m : m;
         const year = date.getFullYear();
         const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
         const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
         const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
         const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
         // return hours + 'h' + min + 'm' + sec + 's';
         return day + '/' + month + '/' + year + '-' + hours + ':' + min + ':' + sec;
     }
 
     static getDay(d: string): string {
         if (d === '' || d === undefined) {
             return '';
         }
         const date = new Date(d);
         date.toLocaleString('fr-FR', { hour: 'numeric', hour12: true });
         const m = Number(date.getMonth() + 1);
         const month = m < 10 ? '0' + m : m;
 
         const year = date.getFullYear();
         const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
         return day + '/' + month + '/' + year;
     }
 
     static getHours(d: string): string {
         if (d === '' || d === undefined) {
             return '';
         }
         const date = new Date(d);
         const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
         const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
         const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
         return hours + 'h' + min + 'm' + sec + 's';
     }
 }
 