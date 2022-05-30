import { BaseDto } from "../dtos/base-dto";
import { Message } from "../dtos/message";
import { UniqueGenerator } from "../utils/UniqueGenerator";

export class Crud<T extends  BaseDto> {
    constructor(_data:T[]){
        
        this.data=_data;
    }
    create(model:T){
        model.guid=UniqueGenerator.newGuid();
        
        this.data.push(model);
    }
    update(model:T){
        let intance = this.getByGuid(model.guid);//getbyguid
        if(intance!=null && intance!=undefined){ //has check?
            intance={...model};//clone

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
    getAll(){
        return this.data;
    }
    private data:T[];
}
function aa(){
    let ab=new Crud<Message>([]);
    ab.create({})

}