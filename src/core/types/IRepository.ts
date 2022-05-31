export interface IRepository<T> {
    add(model:T):Promise<void>;
    update(model:T):Promise<void>;
    delete(_guid:string):Promise<void>;
    getByGuid(_guid:string):Promise<T |undefined> ;
    find(predicate:(value: T, index: number, array: T[])=>any):Promise<T | undefined>;
    findAll(predicate:(value: T, index: number, array: T[])=>any):Promise<T[]>;
    save(_data:T[]):void;
}
