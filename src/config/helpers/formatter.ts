export class Fromatter {
    public static  currency (value:number):string {
        return new Intl.NumberFormat('en-USD',{
            style:'currency',
            currency:'USD'
        }).format(value)
    }
}