import { BaseDto } from "./base-dto";

export class Message extends BaseDto {
    constructor(){
        super();
    }
    channelGuid?:string;
    senderGuid?:string;
    text?:string;
    sendTime?:Date;
}
