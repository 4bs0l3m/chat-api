import { UniqueGenerator } from "../utils/UniqueGenerator";

export class BaseDto {
    constructor(){
      
    }
    guid?:string;
    createdDate?:Date;
    modifiedDate?:Date;
    active?:number;
}
