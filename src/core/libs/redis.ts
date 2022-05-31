
import * as redis from 'redis'
import { BaseDto } from '../dtos/base-dto';
import { IRepository } from '../types/IRepository';

export class Redis <T extends BaseDto> implements IRepository<T> {
    private storeName:string;
    private store;
    private data;
    private key:string;
    constructor(_key:string,_storeName:string){
        this.storeName=_storeName;
        this.key=_key;
        
        this.store=this.createStore();
        this.data=this.getStoreData();
    }
    save(_data:T[]): void {
        this.store.set(this.getKey(),this.data);
    }
    async add(model: T): Promise<void> {
        let _item=(await this.getStoreData());
        _item.push(model)
        this.save(_item);
    }
    async update(model: T): Promise<void> {
        let _item=(await this.getStoreData()).find(x=>x.guid===model.guid)
        if(_item){
            _item=model;
        }
    }
    async delete(_guid: string): Promise<void> {
        
        this.save((await this.getStoreData()).filter(x=>x.guid!==_guid));
    }
    async getByGuid(_guid: string) {
        return (await this.getStoreData()).find(x=>x.guid===_guid);
    }
    async find(predicate: (value: T, index: number, array: T[]) => any) {
         
        return (await this.getStoreData()).find(predicate);
    }
    async findAll(predicate: (value: T, index: number, array: T[]) => any) {
        return (await this.getStoreData()).filter(predicate);
    }
    public getStoreName(){
        return this.storeName;
    }
    private createStore(){
        return redis.createClient();
    }
    private async getStoreData():Promise<T[]>{
        if(!this.store){
            this.store=this.createStore();
        }
        this.data=(await this.store.get(this.getKey()))
        return this.data;
    }
    getKey(){
        return this.key;
    }
}
