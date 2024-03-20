

export abstract class  HttpAdapter {
    abstract get<T>(url:string,optionss?:Record<string,unknown>):Promise<T>;
}