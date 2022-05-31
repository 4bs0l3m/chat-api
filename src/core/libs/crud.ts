import { BaseDto } from "../dtos/base-dto";
import { IRepository } from "../types/IRepository";
import { UniqueGenerator } from "../utils/UniqueGenerator";

export class Crud<T extends  BaseDto,R extends IRepository<T>>{
    private repository:R;
    constructor(_storeName:string,_repository:R){
        this.repository=_repository;
        //his.data=_data;
    }
    create(model:T){
        model.guid=UniqueGenerator.newGuid();
        
        this.repository.add(model);
        return model.guid;
    }
    update(model:T){
        this.repository.update(model);
    }
    getByGuid(_guid:string){
        return this.repository.getByGuid(_guid);
    }
    delete(_guid:string){
        this.repository.delete(_guid);
    }
    findAll(predicate:(value: T, index: number, array: T[])=>any){
        return this.repository.findAll(predicate);
    }
    find(predicate:(value: T, index: number, array: T[])=>any){
        return this.repository.find(predicate);
    }
}
