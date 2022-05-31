import { BaseDto } from "./base-dto";

export class UserChannel extends BaseDto{
    constructor(){
        super();
    }
    userGuid?:string;
    channelGuid?:string;
}
