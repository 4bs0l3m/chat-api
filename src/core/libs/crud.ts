import { BaseDto } from "../dtos/base-dto";
import { UniqueGenerator } from "../utils/UniqueGenerator";

export class Crud<T extends  BaseDto> {
    constructor(_data:T[]){
        
        this.data=_data;
    }
    create(model:T){
        model.guid=UniqueGenerator.newGuid();
        
        this.data.push({...model});
        return model.guid;
    }
    update(model:T){
        let intance = this.getByGuid(model.guid);//getbyguid
        
        if(intance!=null && intance!=undefined){ //has check?
            intance={...model};//clone
            intance.modifiedDate=new Date();
            return intance;

        }else{
            return null;
        }
    }
    getByGuid(_guid?:string){
        if(_guid){

            return this.data.find(x=>x.guid===_guid);
        }else{
            return null;
        }
    }
    delete(_guid:string){
        this.data=this.data.filter(x=>x.guid!=_guid);
    }
    findAll(predicate:(value: T, index: number, array: T[])=>any){
        return {...this.data.filter(predicate)}
    }
    find(predicate:(value: T, index: number, array: T[])=>any){
        return {...this.data.find(predicate)}
    }
    private data:T[];
}
